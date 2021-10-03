import '../assets/css/Modal.css';

//Stateless modal that recive three arguments
const Modal = ({ handleClose, modalflag, children }) => {
    const showHideClassName = modalflag ? "modal display-block" : "modal display-none";

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