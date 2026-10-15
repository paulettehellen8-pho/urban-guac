from datetime import datetime, timezone
from fastapi import APIRouter,status,HTTPException,Depends
from pydantic import BaseModel
from typing import Optional
from db import prisma
from seed import PENDING_STATUS
from auth import get_current_member
from prisma import Json

router=APIRouter()

#calculate order totals
async def calculate_order_total(client_order_id:str):
   items= await prisma.client_order_product.find_many(
      where={"client_order_id":client_order_id}
   )

   #add them up
   total_selling_price= sum(item.total_selling_price for item in items)
   total_buying_price= sum(item.total_buying_price for item in items)

   #Save the new totals on the order itself
   return await prisma.client_order.update(
       where={"id":client_order_id},
       data={
         "total_selling_price":total_selling_price,
         "total_buying_price":total_buying_price,
         "updated_at":datetime.now(timezone.utc)
       }
   )

#DANIEL'S WAY
# async def calculate_order_total(client_order_id):
#     client_order = await prisma.client_order.find_unique(
#         where={
#             "id": client_order_id
#         }
#     )

#     if not client_order:
#         raise HTTPException(status_code=404, detail="client order not found")

#     group_results = await prisma.client_order_product.group_by(
#         by=["client_order_id"],
#         where={
#             "client_order_id": client_order_id
#         },
#         sum={
#             "total_selling_price": True,
#             "total_buying_price": True
#         }
#     )

#     total_selling_price = 0
#     total_buying_price = 0

#     if group_results:
#         sum_group_results = group_results[0].get("_sum") or {}
#         total_selling_price = float(sum_group_results.get("total_selling_price") or 0)
#         total_buying_price = float(sum_group_results.get("total_buying_price") or 0)

#     total_profit = total_selling_price - total_buying_price

#     updated_client_order = await prisma.client_order.update(
#         where={
#             "id": client_order_id
#         },
#         data={
#             "total_selling_price": total_selling_price,
#             "total_buying_price": total_buying_price,
#             "total_profit": total_profit,
#             "updated_at": datetime.now(timezone.utc)
#         },
#         include={
#             "client_order_status": True,
#             "client_order_product": {
#                 "include": {
#                     "product": True
#                 }
#             }
#         }
#     )

#     return updated_client_order

# #Endpoint to get the active client orders <include client_order_product and products>

# @router.get("/active")
# async def get_active_client_orders(current_member=Depends(get_current_member)):
#    client_orders=await prisma.client_order.find_many( #alternative-> find_first
#       where={
#          "member_id":current_member.id,
#          "client_order_status_id":PENDING_STATUS['id']
#       },
#       include={
#          "client_order_product":{"include": {"product": True}}, #for each line item, also fetch its product
#          "client_order_status":True #attaches the status to each order
#       },
#       order={"created_at":"desc"}
#    )

#    return {
#       "message":"Active client orders fetched",
#       "client_orders":client_orders
#    }


@router.get("/active-order", status_code=200)
async def get_active_client_order(current_member=Depends(get_current_member)):
    client_order = await prisma.client_order.find_first(
        where={
            "member_id": current_member.id,
            "client_order_status_id": PENDING_STATUS["id"]
        }
    )

    client_order = await calculate_order_total(client_order.id)
    return {"message": "", "data": client_order}


# #Endpoint to get all client orders <include client_order_product and products>

# @router.get("/")#=>@router.get("/{client_order_id}", status_code=200)
# async def get_all_client_orders(current_member=Depends(get_current_member)):
#    client_orders= await prisma.client_order.find_many(
#       where={"member_id":current_member.id},
#       include={
#          "client_order_product":{"include": {"product": True}}, #for each line item, also fetch its product
#          "client_order_status":True #attaches the status to each order
#       },
#       order={"created_at":"desc"}
#    )

#    return {
#       "message":"Client orders fetched",
#       "client_orders":client_orders
#    }


@router.get("/{client_order_id}", status_code=200)
async def get_client_order_by_id(client_order_id: str):
    client_order = await calculate_order_total(client_order_id)
    return {"message": "", "data": client_order}






