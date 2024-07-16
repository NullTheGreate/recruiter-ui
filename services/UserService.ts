import { API_END_POINTS } from "@/configs/constants";

class UserService {
    private constructor() { }
    private static instance: UserService;
    static getInstance() { 
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    async login(email: string, password: string) {
        const response = await fetch(API_END_POINTS.LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        return data;
    }
}

export default UserService.getInstance();