/*
   API<library> -> A way to interface 2 or more applications
   eg. Mobile app for android
         -> Bluetooth<Android developer tools>//documentation for interfacing
      Node JS. write to the file system
         -> fs api
         -> Use shell directly
      Provide rules and guidlines for interfacing

   REST API -> Representational State Transfer Application Program Interface
      -> Allows different devices or application to communicate over the internet
         <http or https> Hyper text transfer protocol
         Dr Roy Fielding
         1. Applications that can be interfaced
            -Must be running a
               <http client> => runs on a client device(hardware that can connect to the internet)
                  eg. laptop, phones iot devices<fridge ...>
         2. HTTP clients
            Browser<network tab>, curl<ubuntu-raw html>, POSTMAN<can link backend and front end, can be used for documentation ...etc

         3. Communication
            Its a one way communication 
               Client makes a request and a Server(computer running a different http client) responds

               **Linode-> Buy a server -> no need to buy VPN

               PC(mac address) -> router(IP address) -> ISP -> Server
               PC -> router -> ISP -> VPN -> Server(of location) -> Target Server
               **Your own vpn bounces to different regions

               Dark web has no DNS(phonebook)
               ->mozilla -> email mask/relay

               Proxy -> pi hole

         4. How to make a request
            1. Url -> Universal resource locator- required
            2. Method:<GET, POST, PUT, PATCH, DELETE>required
            3. Headers:<security>optional, depends on the API
            4. Body:<form, image, json>
            5. Parameters<meta information> searching, filtering, query

   TO DO
   1. Install postman
   2. Go to your favorite site on the web
      Got to the network tab
      Identify URL
               Method
               Parameters
               request time
   3. Try the same request on postman and curl

   HTTP Methods
   GET:<fetching data, searching>
   POST:<posting data> <body:json,file,html>
   PATCH:<updating data>
   PUT:<updating data>
   DELETE:<deleting data>

   HTTP Response <wait for the response>
   status code:
      -> 100 to 199: <informational state codes>
      -> 200 to 299: <success status codes>
            -204<No content - deleting an account>, 201<created POST, PUT>
      -> 300 to 399 : <redirectional status code>
            301 - move permanently
               eg. twitter.com -> x.com
      -> 400 to 499: <client made a mistake>
            404 : Not Found <outlier>
            401 : Not authorized
            409 : Forbidden ->Admin, Permissions
      -> 500 to 599 <server Error>
            There's nothing you can do on your end

   RESPONSE BODY
   1.Blob:<binary data>: pictures videos
   2.html:<mazimobility.com>
   3.JSON:<>

   How Does rest api relate to js
      -> github users list
      -> search github users
      -> github api
      -> POSTMAN

*/
