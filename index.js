// require your server and launch it here
const server = require('./api/server')

const PORT = 5000

server.listen(PORT,()=>{
    console.log('listening in port 5000')
})

