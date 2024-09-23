import Heading from '../../utils/Heading';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">

            {/* dynamic heading */}
            <Heading
                title={`Dashboard`}
                description=""
                keywords=""
            />


            <div className={`sticky w-[20%] h-[500px] bg-slate-800 bg-opacity-90 border border-[#ffffff1d] 
                             rounded-xl shadow-xl my-[80px] ml-[30px] `}
            >
                <nav className="w-full flex gap-5 h-full bg-slate-80 ">
                    <ul className='w-full flex flex-col items-center font-medium '>

                        {/* Dashboard */}
                        <Link
                            href="/dashboard"
                            className={`w-full flex gap-3 hover:bg-slate-700 items-center px-3 py-4 rounded-s-xl rounded-r-xl `}
                        >
                            <Image
                                src="/assets/dashboard-icon.png"
                                alt="dashboard icon"
                                width={25}
                                height={25}
                                className=''
                            />
                            <h5 className="pl-2 font-Poppins text-white">Dashboard</h5>
                        </Link>

                        {/* fill Form */}
                        <Link
                            href="/dashboard/fill-form"
                            className={`w-full flex gap-3 hover:bg-slate-700 items-center px-3 py-4`}
                        >
                            <Image
                                src="/assets/fill-form-icon.png"
                                alt="fill-form icon"
                                width={25}
                                height={25}
                                className=''
                            />
                            <h5 className="pl-2 font-Poppins text-white">Fill Form</h5>
                        </Link>

                        <Link
                            href="/dashboard/view-csr"
                            className={`w-full flex gap-3 hover:bg-slate-700 items-center px-3 py-4`}
                        >
                            <Image
                                src="/assets/fill-form-icon.png"
                                alt="fill-form icon"
                                width={25}
                                height={25}
                                className=''
                            />
                            <h5 className="pl-2 font-Poppins text-white">View Data (CSR)</h5>
                        </Link>


                        <li><Link href="/dashboard/view-csr">View Data (CSR)</Link></li>
                        <li><Link href="/dashboard/view-ssr">View Data (SSR)</Link></li>
                        <li><Link href="/dashboard/view-isr">View Data (ISR)</Link></li>
                        <li><Link href="/dashboard/view-ssg">View Data (SSG)</Link></li>
                    </ul>
                </nav>
            </div>

            <main className="w-full p-4">{children}</main>
        </div>
    );
}
