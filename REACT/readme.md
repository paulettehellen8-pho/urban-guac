REACT

It is a JS front end framework<most popular>
It was developed by meta devs
  -> You need to have a good understanding of JS

React Framework has rules and guidelines

WHAT CAN I BUILD WITH REACT
1. Web apps
2. Mobile apps<React Native>

INSTALLATIONS
1. nvm node v18 and above

CREATING A REACT APPLICATION
1. Create react app<old>
2. vite <modern recommended>

VITE.
1. npx create-vite
2. select react application using JS<don't use typescript>
3. To stop the vite application from running <ctrl + c>
4. To start the react server <npm run dev>

**npm is a JS library

**npx executes the library without necessarily installing it
   -> It undercuts npm versions

FOLDERS AND FILES
1. package.json
      - project settings
      - project information eg. versions
         => minor version 0.2.0 -> other versions continue working
         => major versions -> 1.2.1 -> The user must upgrade the version
      - manage libraries
      - script
            -> release checks - check if all the test pass first

            /*
               1. Locate your pakage.json file.
               2. open it in vscode
               3. Locate the scripts section.<cmds>
                  - at the end of the script section add a key value
                  key: favcmd<>
                  value: <favourite linux cmd ex "ls -l">
                  - run the cmd on terminal.
                  npm run favcmd
                  - see linux <bash> geting executed.
               4. Test version changes. patch, minor, major
                  - npm version patch
                  - npm version minor
                  - npm version major
            */
         - Dependencies -> Go to npm and search for your dependency and look for instructions <axios>
               ^ means update the dependancy if its available
               ^ is called a carret


         **package-lock.json tracks dependencies of dependencies
               -> Installed when you run npm install
               /* Daniel's Backend JS - chapchapi */


               /*

                  1. go to npm search for axios.
                  2. get the cmd to install axios.
                     `npm install axios`
                  3. check your package.json. axios should be not installed
                     run `cmd:npm install axios`
                     check your package.json on depedency should see it added.
                  4. run your app. `cmd:npm run dev`
                  5. stop server.
                  6. delete nodemodules and delete package-lock.json
                  7. try running your app. should fail because depedencies have not been install
                  8. run `cmd:npm install`. it will install all your dependencies.
                  9. note:nodemodules folder will be created and package-lock.json
                     will also be created.

               */

               Front End Frameworks
                  Angular js
                  Vue js 
                  Solid js

               Backend Frameworks
                  Express js <node js>
                  fast api - python
                  flask - python

               Database
                  mongoDB
                  postgressqDB
                  Mysql





