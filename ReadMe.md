# Planet Rocket 
## By: Alec Levin, William Doudna, Eric Mott, and Levi Pole
### Developed for CS 458 Software Engineering's final project as well as for personal exploration into building react and node web applicatons.
> > Planet Rocket is a web application that makes use of a MERN stack. MERN incorporates MongoDB, Expresss.js, React.js, and Node.js. The following tutorials allow a user to set up the Planet Rocket site both locally and on a production level Linux server.

## Local Development Environment Setup
To setup the local developers environemt follow the steps below. For a more detailed guide, refer to the [Programmer's Manual](programmersManual.pdf).

1. Clone the repository to a folder on your computer
2. Make sure that node.js and npm (node package manager) are both installed
3. Make sure that MongoDB is installed and running on localhost:27017
    * If it isn’t, change to the folder where it is installed and run the mongo.exe file that is within the ‘bin’ folder
4. From within each the ‘backend’ and ‘frontend’ folder run the command ‘npm install’
5. From the ‘backend’ folder, type the following command into your terminal ‘npm run dev’
6. You can now use the website by accessing localhost:3000. Refer to the [User Manual](userManual.pdf) for usage instructions.

## Production Level Environment Setup
To setup the Production Level environemt on a Linux hosting machine follow the steps below. For a more detailed guide, refer to the [Programmer's Manual](programmersManual.pdf).

1. Install and start Nginx, MongoDB (on port 27017), node.js, npm, and pm2. Most of these can be installed using your preferred service (yum, apt-get, pip, brew, etc.).
2. Clone [the repository](https://github.com/emott10/PlanetRocket2.0) anywhere on your server.
3. Change the ipAddress listed at frontend/src/config/ipAddress.js to the base domain you are using, for example *const ipAddress = 'https://dev.arlevin.org’;*
4. Run *npm install* from each the backend and frontend folders.
5. From the backend run the command *pm2 start bin/www-prodo* This command tells the node process manager (pm2) to start the node backend located at bin/www-prodo.
    * Note that the www-prodo starts an HTTPS node backend, this should only be used if you also have an SSL certificate for your frontend running similarly on HTTPS. 
    * Note that pm2 leaves your backend running in the background, a very helpful tool for being able to exit the command line and leave your process (backend) running.
6. From the front end, run *npm run build* This command builds a production level build of your front end and places it in the frontend/build folder.
7. Move the build folder to /usr/share/nginx/
8. Nginx out of the box serves will serve from /usr/share/nginx/html folder. Change this by editing the following line of /etc/nginx/nginx.conf from */usr/share/nginx/html* to */usr/share/nginx/build*
9. You now have nginx serving your frontend as a static server running on your ip address or domain and pm2 running your backend.
