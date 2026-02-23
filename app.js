const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/dbConfig');
const authRoute = require('./routes/authRoute')
const projectRoute = require('./routes/projectRouter')
const taskRoute = require('./routes/taskRouter');
const dashbored = require('./routes/dashbordRoute');
const cors = require('cors');


app.use(express.json());
connectDb();
app.use(cors());


app.use('/api/auth', authRoute);
app.use('/api/project', projectRoute);
app.use('/api/task', taskRoute);
app.use('/api/dashbord', dashbored)


const PORT = process.env.PORT


app.listen(PORT || 3000, () => {
    console.log('server is started')
})