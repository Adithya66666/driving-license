import Officer from '../models/OfficerModel.js';

const OfficerController = {
    async createOfficer(req, res) {
        try {
          const { name,email,password,username,officerNumber,status,nic,district,officerType,branch } = req.body;
          // Check if license number already exists
          const existingOfficerNumber = await Officer.findOne({ officerNumber });
          if (existingOfficerNumber) {
            return res.status(400).json({ message: "Officer number already exists" });
          }
    
          // Check if license number already exists
          const existingNic = await Officer.findOne({ nic });
          if (existingNic) {
            return res.status(400).json({ message: "NIC number already exists" });
          }
    
          // Check if email already exists
          const existingEmail = await Officer.findOne({ email });
          if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
          }
    
          const newOfficer = new Officer({ name,email,password,username,officerNumber,status,nic,district,officerType,branch });
          const savedOfficer = await newOfficer.save();
          res.status(201).json(savedOfficer);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    },

    async officerLogin(req, res) {
        try {
            const { officerNumber, password } = req.body;
            if (!officerNumber || !password) {
              return res.status(400).json({ message: 'Officer number and password are required' });
            }
            const officer = await Officer.findOne({ officerNumber, password });
            if (!officer) {
              return res.status(404).json({ message: 'Officer not found' });
            }
            res.status(200).json(officer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}

export default OfficerController;
