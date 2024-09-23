import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import { IUserBody } from '../../../types/user.type';
import User from '../../../models/user.model';




// =========================== POST request (Add user) ===========================
export async function POST(req: Request) {
    try {
        await connectToDatabase(); // connect to DB

        const { name, email, role, password, salary } = await req.json() as IUserBody;

        if (!name || !email || !role || !password || !salary) {
            return NextResponse.json({
                message: "name, email, role, password, salary fields are required",
                success: false,
                status: 403
            });
        }

        const newUser = await User.create({ name, email, role, password, salary });

        return NextResponse.json({
            message: "New user added successfully",
            status: true,
            newUser,
        });
    } catch (error: any) {
        console.log("Error while adding new user = ", error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}




// =========================== GET request (Get all users) ===========================
export async function GET(req: Request) {
    try {
        await connectToDatabase(); // connect to DB

        const allUsers = await User.find({});

        return NextResponse.json({
            message: "All users fetched successfully",
            allUsers,
            status: true,
        });
    } catch (error: any) {
        console.log("Error while fetching all users = ", error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}