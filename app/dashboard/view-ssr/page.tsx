

import { UserTable } from '../../components/table/UserTable'
import { IUserBody } from "../../../types/user.type"

// Server-side data fetching in the page component
// const fetchAllUsers = async (): Promise<IUserBody[]> => {
//     const apiUrl: string = process.env.NODE_ENV === 'production'
//         ? (process.env.PRODUCTION_API_URL as string) : 'http://localhost:3000/api/user';  // Development URL

//     const response = await fetch(apiUrl, { cache: 'no-store' });

//     const users = await response.json();
//     return users?.allUsers || [];
// }


const fetchAllUsers = async (): Promise<IUserBody[]> => {
    try {
        const apiUrl = process.env.NODE_ENV === 'production'
            ? (process.env.PRODUCTION_API_URL as string) || 'https://your-production-url/api/user'
            : 'http://localhost:3000/api/user';

        const response = await fetch(apiUrl, { cache: 'no-store' });

        // Log and handle non-JSON responses
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        
        if (contentType && contentType.includes("application/json")) {
            const users = await response.json();
            return users?.allUsers || [];
        } else {
            const textResponse = await response.text();  
            console.error("Received non-JSON response:", textResponse);
            throw new Error("Invalid response format: expected JSON");
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];  
    }
};



export default async function ViewSSRPage() {

    // Fetch the data server-side during the request
    const allUsers = await fetchAllUsers();
    // console.log("allUsersdata = ", allUsers)  
    console.log("Hello from server")

    return (
        <div className='p-5 text-white  '>
            <h1 className='text-3xl font-bold text-green-500 '>
                All Users Data (SSR)
            </h1>

            {/* render table */}
            <UserTable data={allUsers} />

        </div>
    );
}
