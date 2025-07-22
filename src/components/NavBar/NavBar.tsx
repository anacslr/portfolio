import { Link } from "react-router";
import { useState } from "react";
import "./NavBar.css"

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="navbar"
            onMouseLeave={() => setOpen(false)}>
            <Link to = "/"> <img className="avatar" src="/images/avatar_anais.png" alt="avatar" />
            </Link>

         <div 
        className={`burger ${open ? "open" : ""}`} 
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>
       
        <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><Link to = "/">Accueil</Link></li>
        <li><Link to = "/projects">Mes projets</Link></li>
        <li><Link to = "/about">À propos de moi</Link></li>
        </ul>
        </nav>
    )
}