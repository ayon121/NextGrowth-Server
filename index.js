const express = require('express');
const cors = require('cors');
const allUserRoutes = require('./routes/allUsersRoute');
const AddUserRoute = require('./routes/AddUserRoute')
const GetSingleUser = require('./routes/GetSingleUser')
const CreateOrder = require('./routes/CreateOrders')
const ContactUs = require('./routes/contactRoute')




const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());






// User Routes
app.use('/api/allusers', allUserRoutes);
app.use('/api/adduser', AddUserRoute)
app.use('/api/getuserbyemail/' , GetSingleUser)
app.use('/api/createOrder/' , CreateOrder)
app.use('/api/contact/' , ContactUs)






app.get('/', (req, res) => {
  res.send('server is running');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
