import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';
import { User } from '../models/User';
import { AppDataSource } from '../config/db';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from header

    if (!token) {
        return res.status(401).json({ error: 'You do not have permission to perform this action' });
    }

    jwt.verify(token, ENV.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        var userId = decoded.id;
        const userRepository = AppDataSource.getRepository(User);
        req.user = await userRepository.findOne({ where: { id: userId } });
        next(); // Continue to the next middleware or route
    });
}; 