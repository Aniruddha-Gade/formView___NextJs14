import { Schema, model, models } from 'mongoose';


export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    salary: number;
}



const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"],
        select: false // whenever we fetch user data from DB , by default password will be excluded

    },
    role: {
        type: String,
        enum: ['Fresher', 'Experienced'],
        required: true
    },
    salary: {
        type: Number,
        required: true
    },

});



const User = models.User || model<IUser>('User', userSchema);

export default User;
