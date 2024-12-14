const { getUserCollection } = require('../models/user');


// Controller function to get all tasks
async function getAllUsers(req, res) {
  try {
    const UserCollection = await  getUserCollection();
    const Users = await UserCollection.find().toArray();
    res.status(200).json(Users);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = { getAllUsers };
