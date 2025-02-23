import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from '../emails/emailHandlers.js';

export const signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const existingUsername = await
        User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name, 
            email, 
            password: hashedPassword, 
            username
        })

        await user.save();

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '3d'});
 
        res.cookie ('jwt-UCLINK', token, {
            maxAge: 3 * 24 * 60 * 60 * 1000, 
            httpOnly: true, 
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })
        res.status(201).json({ message: "User created successfully"});

        const profileURL = process.env.CLIENT_URL + "/profile/" + user.username;
        try {
            await sendWelcomeEmail(user.email, user.name, profileURL);
        } catch (emailError) {
            console.error("Error sending welcome email: ", emailError);
        }


    } catch (error) {
        console.log("Error in signup: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = (req, res) => {
    res.send('Login');
}

export const logout = (req, res) => {
    res.send('Logout');
}