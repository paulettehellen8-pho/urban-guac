'''
Key Word Arguements = <dictionary: key and value>
'''

#testing kwargs
#List of kwargs
def myKwargs(**kwargs):
   print("Kwargs is ",type(kwargs))
   print(kwargs)
   #print("b is ", kwargs["b"]) #to access b in the dict

myKwargs(a=23,b=30)#{a:23,b:30}

myKwargs(name="Samson", email="sam@sam.com", dict={"a":"a"})


def area_rectangle(length,width):
   area=length*width
   print(f"For a rectangle with length {length} and width {width}, The area is {area}")

#Option 1 -> Call it directly with args
#The order of the arguements matters
area_rectangle(5,2)

#Option 2 ->args
width=4
length=39
area_rectangle(width,length)#args
area_rectangle(width=width,length=length)#kwargs

#Option 3 -> kwargs
#The order of the arguements doesn't matter
#You have to match the parameter names with arguements
area_rectangle(width=10,length=55)