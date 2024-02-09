const express = require('express')
const {FeedBackInsert, FeedBackView} = require('../Controller/FeedbackConntroller')

const FeedBackRouter = express.Router()


FeedBackRouter.post('/feedbackinsert', FeedBackInsert)
FeedBackRouter.get('/feedbackview', FeedBackView)


module.exports = FeedBackRouter
