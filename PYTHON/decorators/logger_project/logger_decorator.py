#log decorator functin
#->Creata file based on the current date
#->Function called, time called, time taken, result
#Python file system <in built>
#Python time
import time
from datetime import date,datetime
#capture errors and log
#use try catch <JS> try except <python>

def logger(func):
   def wrapper(*args,**kwargs):
      start_time=time.time()
      print(f"Start time {start_time}")
      result=func(*args,**kwargs)
      end_time=time.time()
      diff=end_time-start_time
      diff_in_ms=round(diff*1000,2)
      today=date.today()
      timestamp=datetime.now().isoformat()

      #with open(f"{today}.txt", "a") as f:
         #f.write(f"ts:{timestamp}---func:{func.__name__}---time:{diff:.2f}---ms:{diff_in_ms}.ms\n")

      return result
   return wrapper

@logger
def hello():
   print("Hello world")



@logger
def big_count():
   for i in range(0,100):
      print(i)
      pass

hello()
big_count()

# start = time.time()
# print(f'Start time: {start}')
# time.sleep(1)
# end = time.time()
# print(f'Elapsed: {end - start:.2f} seconds')