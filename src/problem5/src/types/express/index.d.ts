import { User } from '../../models/User'; // Thay đổi đường dẫn nếu cần

declare global {
    namespace Express {
        interface Request {
            user?: User; // Hoặc kiểu dữ liệu phù hợp
        }
    }
} 