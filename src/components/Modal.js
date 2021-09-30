import '../assets/css/Modal.css';

const Modal = ({ handleClose, flag, children }) => {
    const showHideClassName = flag ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <span className="close" onClick={handleClose}>&times;</span>
                {children}
            </section>
        </div>
    );
};
export default Modal;