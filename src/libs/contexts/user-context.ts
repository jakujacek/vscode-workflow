import { createContext, useContext } from "react";

interface User {
	firstName: string;
	lastName: string;
	suffix: number;
	email: string;
}

type UserContextType = {
	users: User[],

}

const UserContext = createContext([{
	firstName: '',
	lastName: '',
	suffix: 1,
	email: '',
} as User, (obj: User) => obj]);