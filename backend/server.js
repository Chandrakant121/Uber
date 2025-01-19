const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`server running on ${port}`)
})






// const connect = require('./db/db')
// app.listen(port, async () => {
//     try {
//         await connect();
//         console.log("listening port 5000");
//     } catch (error) {
//         console.log(error.message);
//     }
// });

