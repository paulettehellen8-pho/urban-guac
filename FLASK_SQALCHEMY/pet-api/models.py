from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pet(db.Model):
   __tablename__="pets"
   id = db.Column(db.Integer,primary_key=True)
   name = db.Column(db.String(50),nullable=False)
   species = db.Column(db.String(30),nullable=False)
   age = db.Column(db.Integer)
   adopted = db.Column(db.Boolean, default=False, nullable=False)

   def to_dict(self):
      return{
         "id": self.id,
         "name": self.name,
         "species": self.species,
         "age": self.age,
         "adopted": self.adopted
      }

   def __repr__(self):
      return f"<Pet {self.id}: {self.name} ({self.species})>"