const express = require('express')
const ConnectDB = require('./Db')
const cors = require('cors')
const FeedBackRouter = require('./Router/FeedBackRouter')
const bodyParser = require('body-parser');


const app = express()
const Port = 5000

ConnectDB()
app.use(cors())
app.use(bodyParser.json());

app.use('/api/feedback', FeedBackRouter)


app.use(express.json())

app.listen(Port,() =>{
    console.log(`${Port} port is running`);
})