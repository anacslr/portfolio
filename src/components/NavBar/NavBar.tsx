import { useState } from "react";
import { Link } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" onMouseLeave={() => setOpen(false)}>
      <Link to="/">
        {" "}
        <img className="avatar" src="/images/avatar_anais.png" alt="avatar" />
      </Link>

      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
          }
        }}
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/projects">Mes projets</Link>
        </li>
        <li>
          <Link to="/about">À propos de moi</Link>
        </li>
      </ul>
    </nav>
  );
}
