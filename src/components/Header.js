import { useState } from "react";
import logo from "../../header-logo.png";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Header = () => {
  const [btnText, setbtnText] = useState("Login");
  const isOnline = useOnline()
  // console.log(isOnline)

  const handelCLick = async () => {

    if (btnText === "Login") {
      setbtnText("Logout");
    } else {
      setbtnText("Login");
    }
  };


  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
        <img className="logo" src={logo} />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>{isOnline ? "Online" : "Offline"}</li>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">  About Us</Link></li>
          <li> <Link to="/contact">  Contact Us</Link></li>
          <button
            onClick={() => {
              handelCLick();
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
