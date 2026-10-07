from flask import Flask, jsonify,request
from flask_migrate import Migrate
from models import db,Pet


app=Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///pets.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
app.json.compact=False

db.init_app(app)
migrate=Migrate(app,db)