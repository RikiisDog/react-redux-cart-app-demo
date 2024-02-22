import { selectTotal } from "../../redux/cart/selectors";
import { useSelector } from "react-redux";
import { ClearCartButton } from "./ClearCartButton";

export const DisplayPrice = () => {
    const total = useSelector(selectTotal);
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    合計 <span>{total.toLocaleString()}</span>
                </h4>
            </div>
            <ClearCartButton />
        </footer>
    );
};
