import fs from 'fs/promises';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ message: 'Email and Password both are required for Login'});
        return;
    }

    const users = JSON.parse(await fs.readFile('data/user.json', 'utf-8'));

    const user = users.find(u => u.email === email);

    if (!user) {
        res.json({ message: "User not found" });
        return;
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
        res.json({ message: "Invalid credentials" });
        return;
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )

    res.json({
        message: 'User logged in successfully',
        token
    });
    return;
}