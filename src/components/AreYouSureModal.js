import React from 'react';
import Modal from 'react-modal';


const AreYouSureModal = (props) => {

    console.log("Modal Props");
    console.log(props);

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
                 <button className='button button_modal button_danger' onClick={props.handleCloseModal}>Yes</button>
                 <button className='button button_modal' onClick={props.handleCloseModal}>No</button>
              </div>
          </div>


      </Modal>

    );

}

export default AreYouSureModal;


/**

 import React from 'react';

 import Modal from 'react-modal';



 const OptionModal = (props) =>  (

 <Modal
 isOpen={!!props.selectedOption}
 onRequestClose={props.handleClearSelectedOption}
 contentLabel="Option Selected Modal"
 closeTimeoutMS={200}
 className='modal'
 >
 <h3 className='modal__title'>Selected Option: </h3>
 {props.selectedOption  &&  <p className='modal__body'>{props.selectedOption}</p>}
 <button className='button' onClick={props.handleClearSelectedOption}>Sounds Great</button>

 </Modal>

 );



 export default OptionModal;

 */
