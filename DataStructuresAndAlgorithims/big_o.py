#5->5+4+3+2+1

#peformance -> time the milliseconds
#Time <long> and space<memory it uses> complexity
#Backend => speed of execution 
#Operation is a single thing < = + / =>
import time

#linear time n(1) -> without the nested function
def up_to_n(n):  

   #add all the values up to n
   sum=0#op1
   #i=1
   #k=1,k=2,k=3,k=4,k=5
   #i=2
   #k=1,k=2,k=3,k=4,k=5
   for i in range(1,n+1):    # i op2, 1,n+1<op3>  
      #print("I is",i, "Sum is",sum)
      # for k in range (1,n+1):
      #    t=i
      #    print(iter)
      sum=sum+i#op4
      
   #print("Sum is",sum)
   print(f"\n Linear time when n is {n} sum is {sum}")#op5
   return sum#op6

#constant time
def up_to_n_2(n):
   sum= n*(n+1)/2 #op1+op2+op3-> 3k -> 1
   print(f"\n Constant time whenhen n is {n} sum is {sum}")
   return sum

#1-> constant time (c)


"""
   op1+op2+op3+op4+op5+op6
   rename = k
   k+k+k+n*k+k=>
      -> 4k+n*k
      -> Simplify the operations
      -> 4k+n+k->[4k, n*k]
      -> k=1 second => [4,n]
   n=1-> [4,1]
   n=1000=>[4+10000]print(f"\n When n is {n} sum is {sum}")#op5
   bigO is n(1)->linear time
"""
"""
   op1+op2+op3+op4+op5+op6
   rename = k
   k+k+k+n*k+k=>
      -> 4k+n*k(n*k)
      -> Simplify the operations
      -> 4k+n+k->[4k, n*k]
      -> k=1 second => [4,n]
   n=1-> [4,1]
   n=1000=>[4+10000]print(f"\n When n is {n} sum is {sum}")#op5
   bigO is n(1)->linear time
"""

# start_time=time.perf_counter()

# up_to_n(50000)

# end_time=time.perf_counter()
# diff_ms=(end_time-start_time)*1000

# print(f"\n Execution time:{diff_ms} ms")

n = 200000

start_time = time.perf_counter()
up_to_n_2(n)
end_time = time.perf_counter()

diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time: {diff_ms} ms")


start_time = time.perf_counter()
up_to_n(n)
end_time = time.perf_counter()

diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time: {diff_ms} ms")

ar={"1":{
   "left":{
      2:{
         "left":{4:""},
         "right":{5:""}
      }
   },
   "right":{
      3:{
         "left":{6:""},
         "right":{7:""}
      }
   }
}}
#arrays
#objects
#data structure->linked list