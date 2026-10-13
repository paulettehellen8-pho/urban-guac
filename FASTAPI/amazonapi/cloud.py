import os
import cloudinary, cloudinary.uploader
from cloudinary.utils import cloudinary_url

from dotenv import load_dotenv

load_dotenv()

cloudinary.config(
   cloud_name=os.getenv('CLOUD_NAME'),
   api_key=os.getenv('CLOUD_API_KEY'),
   api_secret=os.getenv('CLOUD_API_SECRET')
)

def upload_to_cloud(file_path):
   try:
      res=cloudinary.uploader.upload(file_path)
      print("Res is")
      print(res)
      return res.get("secure_url")
   except Exception as e:
      print(f"Failed to upload. File Error is:", e)
      return None