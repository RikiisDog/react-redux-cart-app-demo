import { selectAmount } from "../../redux/cart/selectors";
import { useSelector } from "react-redux";
import { CartIcon } from "../Icons/CartIcon";

export const Navbar = () => {
    const cartTotalAmount = useSelector(selectAmount);
    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Shopping</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{cartTotalAmount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
