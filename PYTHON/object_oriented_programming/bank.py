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

class BankAccount:
   def __init__(self, name, balance, acc_no):
      self.name=name
      self._balance=balance
      self.acc_no=acc_no

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
   def deposit(self):   
      pass

   def withdrawal(self):   
         pass

   def show_account_details(self):   
         print(f"Owner {self.name}")
         print(f"Balance {self.balance}")
         print(f"Account No. {self.acc_no}")

phobi=BankAccount(name="Phobi", balance=10000000, acc_no="223344223") 

print("Phobi balance", phobi.balance)
phobi.show_account_details()
phobi.balance=-30000 #setting -> updating property
phobi.show_account_details()

#Getters and setters