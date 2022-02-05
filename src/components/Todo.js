import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const deleteHandler = () => {
        // open the modal
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal /> }
            { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
        </div>
    )
}

export default Todo;