const express = require("express");
const mysql2 = require('mysql2');
const cors = require('cors');
const path = require('path');
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require('./models');
const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json())
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 1000*60*60*24
    }
}))


//Routers
const maintenanceHistoryRouter = require('./routes/MaintenanceHistory');
app.use("/maintenancehistory",  maintenanceHistoryRouter);

const maintenanceSchedulerRouter = require('./routes/MaintenanceScheduler');
app.use("/maintenancescheduler",  maintenanceSchedulerRouter);

const usersRouter = require('./routes/Users');
app.use("/auth",  usersRouter);

const dailyDailyCheckListRouter = require('./routes/DailyCheckList');
app.use('/dailychecklist', dailyDailyCheckListRouter)

const uhCheckListRouter = require('./routes/UHCheckList');
app.use('/uhchecklist', uhCheckListRouter)

const ulCheckListRouter = require('./routes/ULCheckList');
app.use('/ulchecklist', ulCheckListRouter)

const crane13CheckListRouter = require('./routes/Crane13CheckList');
app.use('/crane13checklist', crane13CheckListRouter)

const crane14CheckListRouter = require('./routes/Crane14CheckList');
app.use('/crane14checklist', crane14CheckListRouter)

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Server is running on port 3001`)
    })
})


