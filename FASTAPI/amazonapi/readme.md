# MVP
An App where users can search and order products online.
   -> Images, etc and login and authentication
   =>Order products

TOOLS AND TECHNOLOGY
1. Backend -> Python <Fast API>
2. ORM <prisma orm>
3. Images <Cloudflare>

STEP 1 BACKEND DEVELOPER
   1. Create or model our DB
      - Use drawsql.
   2. Meet citeria for our goal MVP

   3. Create you db on beekeeper using sql

   4. Setting up our project folder structure
   pipenv shell
      

# Install dependency

pipenv install fastapi "uvicorn[standard]" prisma

# Initialize prisma

-pipenv run prisma init
https://pris.ly/d/getting-started

- check the follwing should be in your initialzie
- use node version 22
   nvm install 22
   nvm use 22
   node -v

# The schema.prisma should have these
  generator client {
  provider = "prisma-client-py"
  enable_experimental_decimal=true
  }

   datasource db {
   provider = "postgresql"
   url = env("DATABASE_URL")
   }

-- pipenv run prisma db pull
-- pipenv run prisma generate

# Connect to our db

# Routes we begin with are user/member riutes
   - signup <create an account>
   - login <authentification>

==> pipenv run python app.py

# For data validation(optional) use pydantic

      pipenv install pydantic
      pipenv install 'pydantic[email]'

pipenv install bcrypt

# Other routes
   Crud operation for products
