import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between w-6/12 m-auto">
        <h1 className="test-2xl font-bold">Cart</h1>
        <button
          className="test-2xl font-bold p-2 m-2 bg-black text-white rounded-lg"
          onClick={handelClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1>Please add Items to your cart!! Your cart is empty</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
