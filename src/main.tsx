import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthContextProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/",
		element: <Navigate to={"/login"} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	</React.StrictMode>
);
