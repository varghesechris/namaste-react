import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import UserloggedinData from "../utils/UserContext";

const Header = () => {

    const [updateLog, setupdateLog] = useState("Login");

    const {loggedInUser} = useContext(UserloggedinData); 
    //console.log(loggedInUser)

    handleClick= () => {

        if (updateLog == "Logout"){return setupdateLog("Login") }
        else
        setupdateLog("Logout")
    }

    return (
        
        <div className=" flex justify-between bg-pink-100 shadow-lg m-2" >
            <div className="headerimage">
            <Link to="/"> <img className="h-15 w-8" src={require("./mascot.png")}></img></Link>
              
            </div>
            <div className="headerlist ">
                <ul className="flex p-3 m-7 pl-1 items-center">
                   <Link to="/Contact"> <li className="px-4"> Contact Us </li></Link>
                   <Link to="/About"><li className="px-4"> About Us </li></Link>
                    <li className="px-4" > Menu </li>
                    <li className="px-4"> Cart </li> 
                  <li>{loggedInUser}</li>
                    <button onClick={handleClick} className="login px-4 bg-red-500">{updateLog}</button>
                    
                </ul>
            </div>


        </div>
        
    )
}

export default Header;