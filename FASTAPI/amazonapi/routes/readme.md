The routes will go here


- Mongo DB and Couch DB support structured data and have grids for storing large files 
   You can fetch it like  <streaming the files> [GridFS]
      - Mostly useful for private documents like Xrays etc.

<Cloudinary>
   <cmd> pipenv install cloudinary

<Supabase> S3Bucket
   - Limit - 5GB
   - You can self host to manage costs

<Minio>
   - Open source S3Bucket like AWS


1. Finish uploading images to the cloud
2. On delete product route -> Delete image from cloudinary also
3. Have a route to change <update an image>
4. After uploading the file to cloudinary delete the file <even if there is an error> [use finally]


SECURITY (Authentication and Authorization)
Authentication
   - We know the person trying to access our endpoints(routes)<401>

   1. Sessions<cookies to store user data>
   2. Basic password authentication<postgres>
   3. Jwt <Recommended>
         [cmd]: pipenv install pyjwt

Authorization
   - Does he have the right permissions <409>
