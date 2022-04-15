const http = require('http');
const port = process.env.PORT || 5000;
const os = require('os');

const handler = (request, response)=> {
    if(request.method === 'GET' && request.url === '/'){
        return response.end(`Hello world! My hostname/container ID is: ${os.hostname} and no of cores : ${os.cpus.length}`);
    }
};
const server = http.createServer(handler);

server.listen(port, ()=>{
    console.log(`Application listening on port ${port}`);
});