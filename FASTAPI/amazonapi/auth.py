import os
import jwt

from datetime import datetime,timedelta,timezone
from dotenv import load_dotenv
from fastapi import Depends,HTTPException,status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from db import prisma

load_dotenv()

JWT_SECRET_KEY=os.getenv('JWT_SECRET')
ALGORITHM=os.getenv('JWT_ALGORITHM')
ACCESS_TOKEN_EXPIRE_MINUTES=int(os.getenv('JWT_EXPIRE_MINUTES'))

def create_access_token(data):
   to_encode=data
   expire=datetime.now(timezone.utc)+timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
   to_encode.update({"exp":expire})
   token=jwt.encode(to_encode,JWT_SECRET_KEY,algorithms=ALGORITHM)
   return token


async def get_current_member(credentials:HTTPAuthorizationCredentials=Depends(HTTPBearer())):
   token=credentials.credentials
   print("TOKEN IS", token)

   try:
      decoded=jwt.decode(token,JWT_SECRET_KEY,algorithm=[ALGORITHM],options={"verify_exp":False})
   except jwt.PyJWTError:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

   member_id=decoded.get("id")
   print("MEMBER_ID",member_id)

   exp=decoded.get("exp")
   current_time=datetime.now(timezone.utc).timestamp()

   if not exp or current_time>exp:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expired")

   if not member_id:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token payload")

   member=await prisma.member.find_unique(where={"id":member_id})

   if not member:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Member does not exist")

   # print("Decoded is", decoded)
   # return decoded

   return member