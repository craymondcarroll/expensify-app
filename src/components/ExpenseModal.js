import React from 'react';
import Modal from 'react-modal';


const ExpenseModal = (props) => {


    return (

      <Modal
        isOpen = {props.isOpen}
        onRequestClose={props.handleCloseModal}
        contentLabel={props.modalMessage}
        closeTimeoutMS={300}
        shouldCloseOnOverlayClick={false}
        className="modal"
      >



          <div>
              <h3 className='modal__title'>{props.modalMessage}</h3>

              <div className="modal_button_space">
                 <button className='button button_modal button_danger' onClick={props.handleDialogYesReponse}>Yes</button>
                 <button className='button button_modal' onClick={props.handleCloseModal}>No</button>
              </div>
          </div>


      </Modal>

    );

}

export default ExpenseModal;


