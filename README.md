### DESCRIPTION
In this example we have setup mulitple instances of the node js service and used nginx to load balance the the node js service.

## Project Structure
````
src
└───index.js --- The Node service listening on port 5000
│ .dockerignore -- ignore dockerRelated files
│ .gitignore -- ignore git related files and other folder/files which are intended to be pushed to remote
│  Dockerfile -- This dockerfile is used to prepare the docker image of the node js service
|  docker-compose.yaml --Compose.yaml file helps to spawn up and down the containers
│  nginx.conf --Nginx configuration helps to load balance our application and it has much more capabilities
│  README.md
│  CONTRIBUTING.md
````

After starting the service open browser and hit http://localhost and if you keep on hitting the you will see that every request is getting consumed by different container.

In future i will add persistance storage and run the entire setup in docker-compose mode and will transition the entire setup in kubernetes mode.

For more details visit CONTRIBUTING.md