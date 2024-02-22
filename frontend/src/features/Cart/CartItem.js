import { Plus } from "../../components/Icons/Plus";
import { Minus } from "../../components/Icons/Minus";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../redux/cart/CartSlice";

export const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className="cart-item">
            <img src={img} alt="" />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">{parseInt(price).toLocaleString()}円</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
                    削除
                </button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch(increase(id))}>
                    <Plus />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={() => dispatch(decrease(id))}>
                    <Minus />
                </button>
            </div>
        </article>
    );
};
