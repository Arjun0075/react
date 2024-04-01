import AccordionDropDown from "./AccordionDropDown";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div>
        <div className="text-center m-4 p-4 font-bold">
            <h1>Cart</h1>
            <div className="">
                <button className="m-4 p-4 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
        </div>
      <div className="m-auto w-6/12">
        <AccordionDropDown itemCards={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
