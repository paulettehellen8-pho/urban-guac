## try {} catch(e){} throw
## try except, Exception as (e)-> If you don't know the specific error
## try, except<>
## raise
## Syntax, Name, TypeError, ValueError, ZeroDivision
## Index Error<list>, KeyErrror


try:
   raise ValueError("Invalid age")
   result=10/10
   print("line 12")
except ZeroDivisionError:
   print("Zero division")
except Exception as e:
   print(e)
finally:
   print("Completed error handling")

class Pos(Exception):
   pass

raise Pos("Not enough items")