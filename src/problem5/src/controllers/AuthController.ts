import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { LoginDTO } from '../dto/LoginDTO';
import { validateData } from '../common/utils/ValidationUtils';
import { UserDTO } from '../dto/UserDTO';

const authService = new AuthService();

export const AuthController = {
  async signUp(req: Request, res: Response) {
    const [userDate, formattedErrors] = await validateData(UserDTO, req.body);

    if (formattedErrors) {
        return res.status(400).json({ errors: formattedErrors });
    }
    const user = await authService.signUp(userDate);
    res.status(201).json(user);
  },

  async login(req: Request, res: Response) {
    const [loginData, formattedErrors] = await validateData(LoginDTO, req.body);

    if (formattedErrors) {
      return res.status(400).json({ errors: formattedErrors });
    }

    try {
      const token = await authService.login(loginData);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
