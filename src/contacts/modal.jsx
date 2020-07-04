import React from 'react';
import Modal from 'react-modal';




const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    textAlign: 'center',
    border: '4px solid #123456',
    backgroundColor: '#eee'

  },
  overlay: {
    backgroundColor: '#aaaaaa99'
  }
};






const ModalCon = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  let openModal = () => {
    setIsOpen(true);
  }

  let afterOpenModal = () => {
    subtitle.style.color = '#000';

  }

let closeModal = () => {
    setIsOpen(false);
  }




    return (
      <div >
        <a onClick={openModal}>Contacts</a>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Contacts"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Contacts</h2>
          <form>
          <p>E-mail:<a href="mailto:vladbondarenko173@gmail.com">vladbondarenko173@gmail.com</a></p>
          <p >Viber,Telegram:<i> +79521133811</i></p>


          </form>
        </Modal>
      </div>
    );
}


export default ModalCon
