import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/ModalSlice";

export const ClearCartButton = () => {
    const dispatch = useDispatch();
    return (
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
            カートを空にする
        </button>
    );
};
