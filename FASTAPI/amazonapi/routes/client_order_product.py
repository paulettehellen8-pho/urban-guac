from datetime import datetime, timezone
from fastapi import APIRouter,status,HTTPException,Depends
from pydantic import BaseModel
from typing import Optional
from db import prisma
from seed import PENDING_STATUS
from auth import get_current_member
from prisma import Json
from client_order import calculate_order_total

router=APIRouter()


class CLIENT_ORDER_PRODUCT_SCHEMA(BaseModel):
   product_id:Optional[str]=None        
   qty:int=1  




@router.post("/",status_code=201)
async def upsert_product(payload:CLIENT_ORDER_PRODUCT_SCHEMA,
                              current_member=Depends(get_current_member)):

   product=await prisma.product.find_unique(where={
      "id":payload.product_id
   })

   if not product:
      raise HTTPException(status_code=404, detail="Product doesn't exist")
      
   
   client_order=await prisma.client_order.find_first(where={
      "member_id":current_member.id,
      "client_order_status_id":PENDING_STATUS['id']
   })

   if not client_order:
      client_order=await prisma.client_order.create(
         data={
            "member_id":current_member.id,
            "member_obj":Json(current_member.model_dump(mode='json')),
            "client_order_status_id":PENDING_STATUS['id']
         }
      )

   client_order_product=await prisma.client_order_product.find_first(
      where={
         "client_order_id":client_order.id,
         "product_id":payload.product_id
      }      
   )

   if client_order_product:
      qty=client_order_product.qty+payload.qty                
      unit_selling_price=product.selling_price 
      unit_buying_price=product.buying_price  
      client_order_product=await prisma.client_order_product.update(
         where={"id":client_order_product.id},
         data={
            "qty":qty,
            "unit_selling_price":unit_selling_price,
            "unit_buying_price":unit_buying_price,  
            "total_selling_price":unit_selling_price*qty,
            "total_buying_price":unit_buying_price*qty,
            "updated_at":datetime.now(timezone.utc)
         }
      )

   else:
      qty=payload.qty                
      unit_selling_price=product.selling_price 
      unit_buying_price=product.buying_price  
      client_order_product=await prisma.client_order_product.create(
         
         data={
            "client_order_id":client_order.id,
            "product_id":payload.product_id,
            "qty":qty,
            "unit_selling_price":unit_selling_price,
            "unit_buying_price":unit_buying_price,  
            "total_selling_price":unit_selling_price*qty,
            "total_buying_price":unit_buying_price*qty,
            "updated_at":datetime.now(timezone.utc)
         } 
      )


   # Calculate order totals for each client order when product or qty changes.
   client_order=await calculate_order_total(client_order.id)

   return {
      "message":"Cart updated successfully",
      "client_order":client_order,
      "client_order_product":client_order_product
   }



