

import { UserTable } from '../../components/table/UserTable'
import { IUserBody } from "../../../types/user.type"

// Fetching data for static generation
const fetchAllUsers = async (): Promise<IUserBody[]> => {
    const response = await fetch('http://localhost:3000/api/user', {
    });

    const users = await response.json();
    return users?.allUsers || [];
}


export default async function ViewISRPage() {

   
    const allUsers = await fetchAllUsers();
    
    console.log("Generating Static Page at build time")

    return (
        <div className='p-5 text-white'>
            <h1 className='text-3xl font-bold text-green-500'>
                All Users Data (ISR)
            </h1>

            {/* render table */}
            <UserTable data={allUsers} />
        </div>
    );
}

// Generate static page with revalidation
export const revalidate = 60; 
