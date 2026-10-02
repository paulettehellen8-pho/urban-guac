1. Install psycopg2 <connect postgres db>
2. Install python dotenv. <parse environmental variable>
3. setup project folder structure
   -[orm.py](orm.py) <custom orm>
   -db.py <db connections>
   -app.py <flask routes and controllers>
   -.env <environmental variable dont share with anyone>
   
  

4. setup the environment and download all packages using pipenv
   cmd: pipenv install psycopg2-binary python-dotenv