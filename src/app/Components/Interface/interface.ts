export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    enrolledCourses: Course[];
}
export interface Course {
    name: string;
    description: string;
    price: number;
    image?: string;
}