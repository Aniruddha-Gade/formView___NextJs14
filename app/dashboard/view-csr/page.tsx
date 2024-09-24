'use client';

import { useState, useEffect } from 'react';
import { UserTable } from '../../components/table/UserTable'




export default function ViewCSRPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading]=useState(false)

    useEffect(() => {
        const fetchAllUsersData = async () => {
            setLoading(true)
            const response = await fetch('/api/user');
            const users = await response.json();
            setAllUsers(users?.allUsers);
            setLoading(false)
        };
        fetchAllUsersData();
    }, []);

    console.log("allUsersdata = ", allUsers)

    return (
        <div className='p-5 text-white  '>
            <h1 className='text-3xl font-bold text-green-500 '>
                All Users Data
            </h1>

            {/* render table */}
            <UserTable data={allUsers} loading={loading}/>

        </div>
    );
}
