import { useDispatch } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import { closeModal } from "../../redux/modal/ModalSlice";
import { clearCart } from "../../redux/cart/CartSlice";

export const CartClearModal = () => {
    const dispatch = useDispatch();

    return (
        <Modal
            title={"買い物かごを空にしますか？"}
            confirmButtonText={"OK"}
            cancelButtonText={"やめておく"}
            confirmDispatch={() => {
                dispatch(clearCart());
                dispatch(closeModal());
            }}
            cancelDispatch={() => dispatch(closeModal())}
        />
    );
};
