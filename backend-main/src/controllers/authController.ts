import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { hashPassword, comparePassword } from "../utils/hash";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const exists = await UserModel.findByEmail(email);
    if (exists) return res.status(400).json({ error: "Email already registered" });

    const hashed = await hashPassword(password);
    const user = await UserModel.create(email, hashed);

    return res.json({ message: "User registered", user });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await UserModel.findByEmail(email);
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await comparePassword(password, user.password_hash);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    return res.json({ message: "Login successful", token });
};
