import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";

import "./logo.css";

function Aside(props) {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <FaUniversity size={80} color="#f7f0f0" />
      </Link>
    </aside>
  );
}

export default Aside;
