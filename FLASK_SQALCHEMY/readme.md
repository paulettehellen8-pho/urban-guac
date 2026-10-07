python -m venv .venv
source .venv/bin/activate
pip install flask flask-sqlalchemy flask-migrate

To run in the terminal
   - export FLASK_APP=app.py
   <!-- - $env:FLASK_APP="app.py" -->
   flask shell
      <from models import db, Pet>
      <db.create_all()>

      buddy = Pet(name="Buddy",species="Dog",age=3)
      >>> db.session.add(buddy)
      >>> db.session.commit()

      db.session.add_all([Pet(name="Luna",species="Cat",age=2), Pet(name="Pip",species="Rabbit",age=1)])
      >>> db.session.commit()