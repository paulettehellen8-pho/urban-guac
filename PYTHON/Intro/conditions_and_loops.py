age=20

#JS => if(<conditions>){}
if age>18: #end of or loop of if statement
   print("You can drink")
   print("Kudos")

   if age>23:
      print("This is awesome")
   print("Another line")

#else if
elif age < 44:
   print("You're not that young")
else:
   print("Last else")

#if(age>80){}
if age>80:
   pass #placeholder -> If you want to fill it in later


#for(let i=0;i<100;i++){0-99}
#range(start,stop,step)
for i in range(0,200,5):
   print("I is ",i)

ar=[23,"hello",45,67,45,40]
#for(let i=0;i<ar.length;i++)
for i in range(0,len(ar)):
   single_item=ar[i]
   print(single_item) 

#for(let singleItem of ar)
for single_item in ar:
   print("Single item ",single_item)


#while(){}
k=0
while k<30:
   k=k+1
   print("K is ",k)