import { useState , useContext } from "react";
import logo from "../../header-logo.png";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () => {
  const [btnText, setbtnText] = useState("Login");
  const isOnline = useOnline()
  // const user = useContext(UserContext) 
  const cartItem = useSelector((store) => store.cart.items)
  console.log(cartItem)

  // console.log(isOnline)

  const handelCLick = async () => {

    if (btnText === "Login") {
      setbtnText("Logout");
    } else {
      setbtnText("Login");
    }
  };


  return (
    <div className="header flex justify-between bg-orange-200 h-36">
      <div className="logo-container">
        <Link to="/">
        <img className="logo w-50 h-32 my-2 ml-10" src={logo} />
        </Link>
      </div>
      <div className="menu m-10 flex items-center">
        <ul className="flex gap-4">
          <li >{isOnline ? "Online" : "Offline"}</li>
          <li > <Link to="/">Home</Link></li>
          <li > <Link to="/about"> About Us</Link></li>
          <li> <Link to="/contact"> Contact Us</Link></li>
          <li className="font-bold"><Link to="/cart">Cart({cartItem.length})</Link></li>
          
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
