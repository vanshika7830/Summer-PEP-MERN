import bcrypt from 'bcrypt';
import User from '../models/user.js';
export const signup = async (req, res) => {
    // const body = req.body;
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: 'All informations are required for signup!' });
            return;
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.json({ message: 'User with this email already exist.' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student",
        });
        res.json({
            message: "New user created successfully"
        });
        return;
    } catch (err) {
        console.log(err);
    }
}
