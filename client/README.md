Angular NGINX Docker example
An example project demostrating deployment of angular application in nginx using docker.

Why NGINX, why not Node.js
There can be cases where you have angular application directly communicating with backend application using REST API serviced by Spring Boot application and you do not have scenario of transforming data/ abstraction of REST API by EXPRESS JS. In this case instead of writing express.js code to send static files, we can use NGINX to server static files and leaverage the benefits of NGINX features such as sendfile, bufferring, security, menitoring etc.

How to run
Clone the project.

$ git clone https://github.com/insomniaTY/husserliana/tree/master/client
Go to project directory

$ cd angular-nginx-docker
Initialize the project

$ npm install
Build the project

$ ng build --prod
Deploy using docker command
Build the image

$ docker build -t client .
Create and start the container as daemon

$ docker run --name client -d -p 8080:80 client
Deploy using docker compose command
Build the image

$ docker-compose build client
Create the container

$ docker-compose create client
To start the container

$ docker-compose start -d client
Note
use -d to start container as daemon
Alternatively you can club all the above docker-compose command to single as shown below, which will build image, create container and start the container

$ docker-compose up --build -d client
Verify
Open browser and use docker server URL to access the application. for example if docker is running on localhost url shall be http://localhost

Useful command
List images

$ docker images
List running containers

$ docker ps
List all containers both running and stopped

$ docker ps -a
Remove container

$ docker rm kp-container
Note
use -f to remove running containers docker rm -f kp-container
Remove image

$ docker rmi angular-nginx-docker
Remove containers and images using docker-compose

$ docker-compose down --rmi all
Useful Links
NGINX dockerhub for more info on configuring nginx settings using nginx.conf files etc.
