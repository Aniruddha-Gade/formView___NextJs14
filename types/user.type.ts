export interface IUserBody {
    name: string;
    email: string;
    role: 'Fresher' | 'Experienced';
    password: string;
    salary: number;
}
