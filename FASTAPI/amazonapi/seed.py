from db import prisma

# status=[
#    {
#         "id": "a1b2c3d4-0001-4a5b-8c9d-000000000001",
#         "name": "Pending",
#         "description": "Order has been placed and is awaiting confirmation.",
#         "icon_name": "clock",
#         "badge_color": "#FEF3C7",
#         "text_color": "#92400E",
#     },
#     {
#         "id": "a1b2c3d4-0002-4a5b-8c9d-000000000002",
#         "name": "Shipped",
#         "description": "Order has left the warehouse and is on its way.",
#         "icon_name": "truck",
#         "badge_color": "#DBEAFE",
#         "text_color": "#1E40AF",
#     },
#     {
#         "id": "a1b2c3d4-0003-4a5b-8c9d-000000000003",
#         "name": "Delivered",
#         "description": "Order has been delivered to the customer.",
#         "icon_name": "check-circle",
#         "badge_color": "#D1FAE5",
#         "text_color": "#065F46",
#     },
# ]

PENDING_STATUS={
      "id": "a1b2c3d4-0001-4a5b-8c9d-000000000001",
      "name": "Pending",
      "description": "Order payment is pending",
      "icon_name": "clock",
      "badge_color": "#FEF3C7",
      "text_color": "#92400E",
}

PAID_STATUS={
           "id": "a1b2c3d4-0003-4a5b-8c9d-000000000003",
           "name": "Delivered",
           "description": "Order payment has been completed successfully.",
           "icon_name": "check-circle",
           "badge_color": "#D1FAE5",
           "text_color": "#065F46",
}

status = [
   PENDING_STATUS,PAID_STATUS
]

async def seed_status():
   for single_status in status:
      seed_status=await prisma.client_order_status.upsert(
         where={
            "id":single_status["id"]
         },
         data={
            "create":single_status,
            "update":{            
               "name":single_status["name"],
               "description":single_status["description"],
               "icon_name":single_status["icon_name"],
               "badge_color":single_status["badge_color"],
               "text_color":single_status["text_color"]
            }
         }
      )
      #print("Seed Status",seed_status)