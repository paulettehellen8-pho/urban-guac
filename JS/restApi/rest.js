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
            Browser<network tab>, curl<ubuntu-raw html>, POSTMAN ...etc

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

*/
