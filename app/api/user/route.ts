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
                success: false
            });
        }

        const newUser = await User.create({ name, email, role, password, salary });

        return NextResponse.json({
            message: "New user addedd successfully",
            status: true,
            newUser,
        });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
