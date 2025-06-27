import { useState } from "react";
import "./Navbar.scss"

function Navbar() {

    const[open,setOpen] = useState(false)

    return (

        <nav>
{/* This section includes left & right navbar components */}
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>
                        Real Homes
                    </span>
                </a>
                <a href="/">Home</a>
                <a href="/">Ajent</a>
                <a href="/">Contact</a>
                <a href="/">About</a>

            </div>
            
            <div className="right">

                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>

                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>


{/* This section is for navbar menu on small screens */}
                <div className={open ? "menu active" : "menu"}>

                    <a href="/">Home</a>
                    <a href="/">Ajent</a>
                    <a href="/">Contact</a>
                    <a href="/">About</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>

                </div>

            </div>
        </nav>
    )

}

export default Navbar;