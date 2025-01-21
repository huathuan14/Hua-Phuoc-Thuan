import { AppDataSource } from '../config/db';
import { User } from '../models/User';
import { UserDTO } from '../dto/UserDTO';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginDTO } from '../dto/LoginDTO';

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async signUp(data: UserDTO): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.userRepository.create({ ...data, password: hashedPassword });
    return await this.userRepository.save(user);
  }

  async login(data: LoginDTO): Promise<string> {
    const user = await this.userRepository.findOne({ where: { email: data.email } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
}
