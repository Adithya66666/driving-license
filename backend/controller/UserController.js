import User from '../models/UserModel.js';

const UserController = {
  // Create a new user
  async createUser(req, res) {
    try {
      const { name, email, licenseNumber,username, password, status, driverStatus, address, nic, dob, doi, doe, image, categories } = req.body;
  
      // Check if license number already exists
      const existingLicenseNumber = await User.findOne({ licenseNumber });
      if (existingLicenseNumber) {
        return res.status(400).json({ message: "License number already exists" });
      }

      // Check if license number already exists
      const existingNic = await User.findOne({ nic });
      if (existingNic) {
        return res.status(400).json({ message: "NIC number already exists" });
      }

      // Check if email already exists
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const newUser = new User({ name, email, licenseNumber,username, password, status, driverStatus, address, nic, dob, doi, doe, image, categories });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //user login
  async userLogin(req, res) {
  
    try {
      const { licenseNumber, password } = req.body;
      if (!licenseNumber || !password) {
        return res.status(400).json({ message: 'License number and password are required' });
      }
      const user = await User.findOne({ licenseNumber, password });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update user by ID
  async updateUser(req, res) {
    try {
      const { name, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default UserController;
