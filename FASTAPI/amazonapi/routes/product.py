from datetime import datetime, timezone
from fastapi import APIRouter,status,HTTPException
from pydantic import BaseModel
from typing import Optional
from db import prisma

router=APIRouter()


class ProductSchema(BaseModel):
   name:str  
   description:Optional[str]=None        
   selling_price:float=0.0        
   buying_price:float=0.0         
   qty:int=1     

# class UpdateProductSchema(BaseModel):
#    name:Optional[str]  
#    description:Optional[str]=None        
#    selling_price:Optional[float]=0.0        
#    buying_price:Optional[float]=0.0         
#    qty:Optional[int]=1 


#CREATE -> post.
@router.post("/",status_code=status.HTTP_201_CREATED)
async def product(payload:ProductSchema):

   new_product=await prisma.product.create(data={
      "name":payload.name,
      "description":payload.description,
      "selling_price":payload.selling_price,
      "buying_price":payload.buying_price,
      "qty": payload.qty

   })


   return {"message":"New item added","product":new_product}

#GET all products
@router.get("/")
async def get_all_products():
   products=await prisma.product.find_many()
   # if not product:
   #       raise HTTPException(status_code=404, detail="Product doesn't exist")
   return products


#GET the product by id
@router.get("/{product_id}")
async def get_product_by_id(product_id: str):

   product=await prisma.product.find_unique(
      where={'id':product_id}      
   )

   if not product:
      raise HTTPException(status_code=404, detail="Product doesn't exist")
   return product


#PUT <update product info>
@router.put("/{product_id}")
async def update_product(product_id:str, payload:ProductSchema):

   data = payload.dict(exclude_unset=True)   #only the updated fields change and everything else is untouched. payload.model_dump(exclude_unset=True)
   data["updated_at"] = datetime.now(timezone.utc)

   updated_product=await prisma.product.update(
      where={'id':product_id},
      data=data 

   )

   if not updated_product:
      raise HTTPException(status_code=404, detail="Product doesn't exist")

   return {"message": "Product updated successfully", "product": updated_product}

   #return {**updated_product.dict}
  


# DELETE <the product>
@router.delete("/{product_id}")
async def delete_product(product_id: str):
   
   deleted_product = await prisma.product.delete(
      where={'id': product_id}
   )

   if not deleted_product:
         raise HTTPException(status_code=404, detail="Product doesn't exist")
   return {"message": "Product deleted", "id": product_id, "product": deleted_product}






#source : https://medium.com/@greatadib82/master-python-based-fast-api-rest-api-development-with-prisma-orm-mongodb-best-practices-c77e1016c3a3

#Excel sheet to update products-> End point -> Route that accepts the excel sheet