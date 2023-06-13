import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { img1 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
	const {
		setLoading,
		setUsername,
		setPassword,
		loading,
		username,
		password,
		login,
		key,
	} = useContext(AuthContext);

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		login().then((res) =>
			res == "Welcome!" ? navigate("/dashboard") : console.log(res)
		);
	};
	return (
		<div className="flex flex-col h-full">
			<nav className="w-full bg-green-800 sm:py-5 py-5 px-4">
				<div className="flex max-w-6xl mx-auto items-center gap-4">
					<img src={img1} className="h-16" />{" "}
					<h1 className="text-xl text-white font-semibold">
						Federal University of Technology Owerri
					</h1>
				</div>
			</nav>
			<main className="w-full p-4 h-full flex flex-col  justify-around items-center text-zinc-700 relative overflow-x-hidden">
				{loading && (
					<motion.div
						initial={{ x: "-100%" }}
						animate={{ x: "100%" }}
						transition={{ repeat: 50, duration: 1 }}
						className="absolute top-0 w-full h-1 bg-yellow-500"
					></motion.div>
				)}
				<h2 className="text-xl font-medium">FUTO Students Result Portal</h2>
				<form
					onSubmit={(e: FormEvent) => handleSubmit(e)}
					className="w-full sm:w-1/2 bg-white rounded-md shadow-xl px-10 py-5 flex flex-col gap-4"
				>
					<div className="p-5 bg-green-800 rounded-full mx-auto w-max h-max ">
						<AcademicCapIcon className="h-10 text-white" />
					</div>
					<p className="mx-auto my-2">Student Portal Login</p>
					<input
						type="text"
						placeholder="Username"
						className="bg-zinc-100 w-full p-4 rounded"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Password"
						className="bg-zinc-100 w-full p-4 rounded"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-green-800 text-white text-lg font-medium w-full p-4 rounded"
					>
						Login
					</button>
					<div className="flex flex-col">
						<Link to="/" className="text-amber-600">
							Forgot Password?
						</Link>
						<p>
							New here?{" "}
							<Link to="/" className="text-amber-600">
								Verify your account
							</Link>
						</p>
					</div>
					<p className="mx-auto text-sm text-zinc-500">
						Powered by Ulpha Deep Labs
					</p>
				</form>
			</main>
		</div>
	);
};

export default Login;
