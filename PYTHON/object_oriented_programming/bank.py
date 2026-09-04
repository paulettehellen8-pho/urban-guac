"""
Abstractions.
Bank class ->
   Deposit, withdrawal, show account
   Getter and setter

Classes are easy to scale functionality with proper understanding
-------------------------------------------------------------------

-> Login to your acc
-> Create an acc
-> Deposit
-> Withdraw
-> Acc balance
"""


"""
Static <it does not change> properties <Belong to a class>
Static method <Class Method> Function belongs to the class

Why would you want to use them
"""

class BankAccount:
   clients = 0
   bank_name="Post Bank"

   def __init__(self, name, balance, acc_no):
      self.name=name
      self._balance=balance
      self.acc_no=acc_no
      #BankAccount.clients += 1
      #self.__class__.clients +=1 

      BankAccount.add_client()#call the class method

   #later change it to a getter
   #control how data is read
   @property #getter
   def balance(self):
      print("Somebody tried to read the balance")
      return self._balance


   #control how data is updated
   @balance.setter
   def balance(self,value):
      if not isinstance(value,(int,float)):
          print("Ensure you pass a number for new balance")
          return

      if value <= 0:
         print("The new balance must be greater than 0")
         return
      
         self._balance=value

   #later change it to a setter
   def deposit(self):   #instance method
      pass

   def withdrawal(self):   
         pass

   def show_account_details(self):   
         print(f"Owner {self.name}")
         print(f"Balance {self.balance}")
         print(f"Account No. {self.acc_no}")

   #---------------------------------------------

   #Static method. @staticmethod 
   #    
   #---------------------------------------------
   @staticmethod
   def calculate_loan_interest(amount,year):
       rate=10
       interest_per_year=amount*(rate/100)
       interest_total=interest_per_year*year
       total=amount+interest_total
       print("-------------------------------------------------------------------------------------")
       print(f"If you take a loan of ${amount}, interest rate per year is ${interest_per_year}")
       print(f"Total interest {interest_total}. Total to pay {total} after {year} year(s)")


   #---------------------------------------------

   #Class method. @classmethod

   #---------------------------------------------
   @classmethod
   def add_client(cls):
       cls.clients += 1




phobi=BankAccount(name="Phobi", balance=10000000, acc_no="223344223") 

print("Phobi balance", phobi.balance)
phobi.show_account_details()
phobi.balance=-30000 #setting -> updating property
phobi.show_account_details()

print(BankAccount.bank_name)#class property
print(phobi.acc_no)# instance attr
print("Total Clients", BankAccount.clients)
dan=BankAccount(name="Phobi", balance=10000000, acc_no="223344223") 
print("Total Clients", BankAccount.clients)

print("---------------------------------------------")
BankAccount.calculate_loan_interest(50000,3)