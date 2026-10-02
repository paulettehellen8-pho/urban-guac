#Object relational mapping(ORM)
   #converts data between incompatible
   #Object relational mapping (ORM)
# Is a programming technique for converting data between incompatible
# type systems in object-oriented programming languages.
# This creates, in effect, a "virtual object database"
# that can be used from within the programming language.

class Inventory:
   def __init__(self,db):
      self.db=db

   def create_table(self):
      #create the inventory table if it doesn't exist
      query="""
               CREATE TABLE IF NOT EXISTS inventory(
               id bigserial primary key,
               name varchar(250) not null, 
               qty integer not null,                
               buying_price integer not null,
               selling_price integer not null check (selling_price>0),
               created_at timestamptz not null default current_timestamp
               );
            """

      with self.db.get_cursor() as cursor:
         cursor.execute(query)
         print("Inventory table created successfully.")

   def add_item(self, name, qty, buying_price, selling_price):
      query="""
               INSERT INTO inventory( name, qty, buying_price, selling_price)
               VALUES (%s,%s,%s,%s)
               RETURNING *;
            """
      with self.db.get_cursor() as cursor:
         cursor.execute(query, ( name, qty, buying_price, selling_price))
         print(f"Item '{name}' added successfully.")
         return cursor.fetchone()

   def get_all_items(self):
      query = "SELECT * FROM inventory;"

      with self.db.get_cursor() as cursor:
         cursor.execute(query)
         items = cursor.fetchall()
         return items


if __name__ == "__main__":
   from db import Database
   db = Database()
   inventory = Inventory(db)
   inventory.create_table()
   inventory.add_item("Item1", 10, 5, 10)
   items = inventory.get_all_items()
   print(items)
