"""
Inheritance->
   Extending a class into another class
   -> Class inherits methods and properties of another class
   ->DRY <Don't Repeat yourself>

--------------------------------------------------------------
Shapes
Rectangle and Square
--- shapes <shape_name>
--- sides <rectangle,square,trapezium> sidea, sideb, sidec
--- area.<>
--- methods -> perimeter of the rectangle
--------------------------------------------------------------

Shape class -> shape_name
   : are, perimeter
   : print

Rectangle <--> square


"""

class Rectangle:

   def __init__(self, length, width):
      self.length=length
      self.width=width
      self.shape_name="Rectangle"

   def area(self):
      area=self.length*self.width
      print(f"For a {self.shape_name} with length {self.length} and width {self.width}, The Area is {area}")


class Square:

   def __init__(self,side):
      self.length=side
      self.width=side
      self.shape_name="Square"

   def area(self):
      area=self.length*self.width
      print(f"For a {self.shape_name} with length {self.length} and width {self.width}, The Area is {area}")


r1=Rectangle(length=20,width=10)
r1.area()

print(r1.shape_name)

s1=Square(side=10)
s1.area()