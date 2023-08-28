import React, { useEffect , useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import UserContext from "./utils/UserContext";
import ResturantMenuCard from "./components/ResturantMenuCard";

const Main = () => {

const [username, setuserName] = useState();

    useEffect (()=>{
        const data = {
            name:"Christy",
        }
        setuserName (data.name);
    })

    return (

        <UserContext.Provider value={{loggedInUser: username}}>
        <div className="main">
            <Header />
            <Outlet />

        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/",
                element: <Body />,
            },

            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/resturant/:resId",
                element: <ResturantMenuCard />,
            },

        ]


    }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);