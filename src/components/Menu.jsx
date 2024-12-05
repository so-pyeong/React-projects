import React, { useState } from "react";

const Menu = ({ onMenuClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = (isHovered) => ({
    padding: "10px 20px",
    fontSize: "1em",
    border: "none",
    backgroundColor: isHovered ? "#0056b3" : "#007bff",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
    margin: "0 10px",
    transition: "background-color 0.2s",
  });

  const menuStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  return (
    <div style={menuStyle}>
      {["about", "movies", "books"].map((menu) => (
        <button
          key={menu}
          style={buttonStyle(hoveredButton === menu)}
          onClick={() => onMenuClick(menu)}
          onMouseEnter={() => setHoveredButton(menu)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {menu === "about" ? "About Me" : menu === "movies" ? "영화" : "책"}
        </button>
      ))}
    </div>
  );
};

export default Menu;
