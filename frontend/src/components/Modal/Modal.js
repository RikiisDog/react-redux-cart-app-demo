export const Modal = ({ title, confirmButtonText, cancelButtonText, confirmDispatch, cancelDispatch }) => {
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>{title}</h4>
                <div className="btn-container">
                    <button className="btn confirm-btn" onClick={confirmDispatch}>
                        {confirmButtonText}
                    </button>
                    <button className="btn clear-btn" onClick={cancelDispatch}>
                        {cancelButtonText}
                    </button>
                </div>
            </div>
        </aside>
    );
};
