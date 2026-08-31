'''
Decorators -> Modify or extend the behaviour of functions or methods without changing their code
'''

"""
 A decorator function should take another function as an arguement/parameter
 It should have a wrapper function
 It should be able to call the passed function

 To use a decorator
 @<decorator function> before function is defined
"""

def my_deco(func):
   def wrapper():
      hello()#print("")#Before we call the function
      func()#When this is commented out => french_hello is not printed
      print("Goodbye")# After we call the function
   return wrapper

#@my_deco
def hello():
   print("Hello World function executes")
   print("Hello World")

@my_deco
def french_hello():
   print("French hello function")
   print("Bonjour World")

french_hello()
#->french_hello -> my_deco(french_hello)->wrapper() -> french_hello
# -> hello() -> hello
