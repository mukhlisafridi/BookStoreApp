import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email, & password are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist..!" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUserCreated = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUserCreated.save();

    res.status(201).json({ message: "user saved successfully ",user:{
      _id:newUserCreated._id,
      name:newUserCreated.name,
      email:newUserCreated.email
    } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });

    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!user || !isMatch) {
    return res.status(400).json({
      message: "invalid email or password..!",
    });
  } else {
    res.status(200).json({
      message: "login successful",
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
      },
    });
  }
  } catch (error) {
    res.status(500).json({message:"internal server error"})
    console.log(error);
    
  }
};

