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


def get_public_id(image_url):
   path = image_url.split("/upload/")[1]
   parts = path.split("/")
   if parts[0].startswith("v") and parts[0][1:].isdigit():
      parts = parts[1:]
   public_id, _ = os.path.splitext("/".join(parts))
   return public_id


def delete_from_cloud(image_url):
   try:
      res = cloudinary.uploader.destroy(get_public_id(image_url))
      return res.get("result") == "ok"
   except Exception as e:
      print("Failed to delete from cloud. Error is:", e)
      return False