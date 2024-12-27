const { getUserCollection } = require('../models/user');


// Controller function to get all tasks
async function getAllUsers(req, res) {
  try {
    const UserCollection = await getUserCollection();
    const Users = await UserCollection.find().toArray();
    res.status(200).json(Users);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function addUser(req, res) {
  try {
    const UserCollection = await getUserCollection();
    const user = req.body
    const query = { email: user.email }
    const existingUser = await UserCollection.findOne(query)
    if (existingUser) {
      return res.send({ message: 'user already exist', insertedId: null })
    }
    const result = await UserCollection.insertOne(user)
    res.send(result)

  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });

  }

}

// Controller function to get a single user by email
async function getUserByEmail(req, res) {
  try {
    const { email } = req.params; // Extract email from URL parameters
    const UserCollection = await getUserCollection();
    const user = await UserCollection.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



module.exports = { getAllUsers , addUser  , getUserByEmail};
