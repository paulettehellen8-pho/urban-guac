"""
Shape class
   Holds properties and methods that are common to all shapes
"""
class Shape:
   def __init__(self, shape_name):
      self.shape_name=shape_name

   def describe(self):
      print(f"This is a {self.shape_name}")

   def display_info(self):
      print("---------------------------------------")
      print(f"Shape: {self.shape_name}")
      print(f"Area: {self.area()}")
      print(f"Perimeter: {self.perimeter()}")
      print("---------------------------------------")


   def area(self):
      print(f"For shape {self.shape_name} area calculation missing")


   def perimeter(self):
         print(f"For shape {self.shape_name} perimeter calculation missing")





#Inheritance class name(<class you are inheriting from>)
class Rectangle(Shape):

   def __init__(self, length, width, shape_name="Rectangle"):
      #super <class we are inheriting from>
      #self <specific object created in the class>
      super().__init__(shape_name=shape_name)  

      self.length=length
      self.width=width

   def area(self):
      return self.length*self.width

   def perimeter(self):
      return 2*(self.length+self.width)


class Triangle(Shape):

   def __init__(self, base, height):
      super().__init__(shape_name="Triangle")


class Square(Rectangle):
   def __init__(self, side):
      #super -> Not shape, It's Rectangle
      super().__init__(length=side, width=side, shape_name="Square")


r1=Rectangle(length=20,width=12)

print("Shape Name: ", r1.shape_name)#shape class
print("Area is: ", r1.area())#Method in the rectangle class
r1.describe() #Shape class
r1.display_info()#Shape class

print("******************************************************")

s1=Square(side=35)
print("Shape Name: ", s1.shape_name)#shape class

#Hierachy ->Square ->Rectangle -> Shape
print("Area is: ", s1.area())#Method in the rectangle class
s1.describe() #Shape class
s1.display_info()#Shape class
print("******************************************************")


t1=Triangle(20,30)
print("Triangle area is ", t1.area())



