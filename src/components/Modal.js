const Modal = () => {
    return ( 
        <div className="modalContainer">
            <div className="modal">
                <h3>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                <div className="buttons">
                    <button>no, cancel</button>
                    <button>yes, delete</button>
            </div>
            </div>
        </div>
    );
}
 
export default Modal;