import { createContext, useState } from "react";

interface AuthContextValue {
	login: () => Promise<string | void>;
	key: string | null;
	loading: boolean;
	username: string;
	password: string;
	setUsername: (username: string) => void;
	setPassword: (password: string) => void;
	setLoading: (loading: boolean) => void;
}
interface AuthContextProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
	{} as AuthContextValue
);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("2020120");
	const [password, setPassword] = useState("Coro@1Auth");

	const [key, setKey] = useState<string | null>(null);

	const login = (): Promise<string | void> =>
		fetch("https://elinteerie1.pythonanywhere.com/api/rest-auth/login/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(async (res) => {
				setLoading(false);
				const data = await res.json();
				setKey(data.key);
				return "Welcome!";
			})
			.catch((error) => {
				setLoading(false);
				return(error);
			});
	return (
		<AuthContext.Provider
			children={children}
			value={{
				login,
				key,
				loading,
				setUsername,
				setPassword,
				setLoading,
				username,
				password,
			}}
		/>
	);
};
