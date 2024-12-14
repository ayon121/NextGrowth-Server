const express = require('express');
const cors = require('cors');
const allUserRoutes = require('./routes/allUsersRoute');




const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());






// User Routes
app.use('/api/allusers', allUserRoutes);




app.get('/', (req, res) => {
  res.send('server is running');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});