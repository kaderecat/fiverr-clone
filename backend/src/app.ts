import express from "express";
import userRouter from "../src/routes/user.route";
import conversationsRoute from '../src/routes/conversation.route'
import gigsRoute from '../src/routes/gig.route'
import ordersRoute from '../src/routes/order.route'
import messagesRoute from '../src/routes/message.route'
import reviewsRoute from '../src/routes/review.route'
import authRouter from '../src/routes/auth.route'

const app = express();
app.use(express.json())

app.use('/api/users' , userRouter)
app.use('/api/auth' , authRouter)
app.use('/api/conversations' , conversationsRoute)
app.use('/api/gigs' , gigsRoute)
app.use('/api/orders' , ordersRoute)
app.use('/api/messages' , messagesRoute)
app.use('/api/reviews' , reviewsRoute)

export default app;
