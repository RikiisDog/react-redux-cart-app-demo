import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CartClearModal } from "./features/Cart/CartClearModal";
import { CartContainer } from "./features/Cart/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItem } from "./redux/cart/selectors";
import { selectIsOpen } from "./redux/modal/selectors";
import { calculateTotal } from "./redux/cart/CartSlice";
function App() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItem);
    const isOpen = useSelector(selectIsOpen);

    // カート内のアイテムの個数に変動があるたびに発火させる
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    return (
        <main>
            {isOpen && <CartClearModal />}
            <Navbar />
            <CartContainer />
        </main>
    );
}

export default App;
