import { selectAmount, selectCartItem } from "../../redux/cart/selectors";
import { useSelector } from "react-redux";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";
import { DisplayPrice } from "./DisplayPrice";

export const CartContainer = () => {
    const cartAmount = useSelector(selectAmount);
    const cartItem = useSelector(selectCartItem);

    if (!cartAmount) {
        return <CartEmpty />;
    }

    return (
        <section className="cart">
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
                {cartItem.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <DisplayPrice />
        </section>
    );
};
