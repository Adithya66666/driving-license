import DmtUserModel from '../models/DmtUserModel.js';

const OfficerController = {
    async create(req, res) {
        try {
          const { name,email,password,username,status } = req.body;    
          // Check if license number already exists
          const existingUsername = await DmtUserModel.findOne({ username });
          if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
          }
    
          // Check if email already exists
          const existingEmail = await DmtUserModel.findOne({ email });
          if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
          }
    
          const user = new DmtUserModel({ name,email,password,username,status });
          const savedUser = await user.save();
          res.status(201).json(savedUser);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
              return res.status(400).json({ message: 'Username and password are required' });
            }
            const user = await DmtUserModel.findOne({ username, password });
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}

export default OfficerController;
