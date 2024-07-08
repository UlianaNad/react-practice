import React, { useState } from 'react'
import Modal from './Modal';

const ModalPopup = () => {
    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(!showModal)
    }
    function onClose(){
        setShowModal(false)
    }
    return (
        <div>
            <button  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm mt-4' onClick={handleToggleModal}>Open Modal</button>
            {
                showModal && <Modal header={<h1>Register</h1>} footer={<h1>Thank you</h1>} close={onClose}/>
            }
        </div>
    )
}

export default ModalPopup