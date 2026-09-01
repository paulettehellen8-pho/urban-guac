"""
object_oriented_programming
<JS, Python, C++, JAVA, etc>
----------------------------

Concept in programming to make work easy
   By using principles
   1. Encapsulation
         - Keeping data and methods <function> inside a class, while restricting direct access to internal data
   2. Abstraction
         - Hiding unnecessary complexity or implementation of details.
   3. Inheritance
         - One class to reuse or extend properties and methods of another class
   4. Polymorphism
         - Appearing in different forms. Method can have diff behaviors
-----------------------------------

JS and python are object oriented.
-> number.toString(), string.toLowerCase()


-------------- CLASS ---------------
-> A blueprint for an object

Class could be an architectural drawing of a house.
   Object -> implementation of the drawing.


"""

#The name of the class should be capitalised
#Properties => fields
class House:
   bedrooms=3
   bathrooms=2
   floors=1
   area=120
   owner=""
   location=""
   architect="KIMANI"

   # def change_location(self, new_location):
   #    self.location = new_location
   #    #print(f"{self.owner}'s house location moved to {self.location}")

   def config(self,owner,location):
      self.owner=owner
      self.location=location
   
   
   def print_self(self):
      #this <the object itself> self <py>
      print(self)
      print(self.__dict__)#dictionary <all properties>


#When accessing object properties use dot notation
#Bracket notation is reserved for dictionaries
paulette_house=House()
# paulette_house.owner="Paulette"
# paulette_house.location="Paris"
paulette_house.config(owner="Paulette",location="London")
print(f"Paulette's House Owner {paulette_house.owner}")
print(f"Paulette's House Location {paulette_house.location}")
print(f"Paulette's House Bedrooms {paulette_house.bedrooms}")
print(f"Paulette's House Bathrooms {paulette_house.bathrooms}")
print(f"Paulette's House Floors {paulette_house.floors}")
print(f"Paulette's House Area {paulette_house.area}")
print(f"Paulette's House Architect {paulette_house.architect}")
print("Printing Paulette's house")
paulette_house.print_self()
print("End of print")
print("---------------------------------------------------------")


daniel_house=House()
# daniel_house.owner="Daniel"
# daniel_house.change_location("Kiambu")
daniel_house.config(owner="Daniel", location="Muranga")
print(f"Daniel's House Owner {daniel_house.owner}")
print(f"Daniel's House Location {daniel_house.location}")
print(f"Daniel's House Bedrooms {daniel_house.bedrooms}")
print(f"Daniel's House Bathrooms {daniel_house.bathrooms}")
print(f"Daniel's House Floors {daniel_house.floors}")
print(f"Daniel's House Area {daniel_house.area}")
print(f"Daniel's House Architect {daniel_house.architect}")
print("Printing Daniel's house")
daniel_house.print_self()
print("End of print")

