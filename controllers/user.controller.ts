import User from '../models/user.model';




// =========================== ADD USER ===========================
interface IAddUserBody {
    name: string,
    email: string,
    password: string,
    role: string,
    salary: number,
}

export async function addUser(data: IAddUserBody) {
    try {
        const user = new User(data);
        await user.save();
        return user;
    } catch (error: any) {
        throw new Error('Error while adding user => ', error);
    }
}




// =========================== GET ALL USERS ===========================
export async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error: any) {
        throw new Error('Error fetching all users => ', error);
    }
}