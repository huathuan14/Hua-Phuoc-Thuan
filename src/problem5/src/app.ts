import express from 'express';
import { AppDataSource } from './config/db';
import authRoutes from './routes/auth.routes';
import achievementRoutes from './routes/achievement.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/achievements', achievementRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
