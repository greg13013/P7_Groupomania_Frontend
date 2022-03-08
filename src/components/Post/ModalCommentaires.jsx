import React, { useState } from "react";
import { Button, Modal } from "react-materialize";
import { useDispatch } from "react-redux";
import { createCommentaire } from "../../actions/commentaire.actions";

export const ModalCommentaires = ({ trigger, postId }) => {
  const [contenu, setContenu] = useState('');
  const [openModal, setOpenModal] = useState(null)

  const dispatch = useDispatch();

  const sendForm = (e) => {
    e.preventDefault();

    if (contenu) {
      dispatch(createCommentaire(contenu, postId))
        .then((res) => {
          console.log(res);
          setContenu('')
          setOpenModal(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Modal header="Ajouter un commentaire" open={openModal} trigger={trigger} options={{ preventScrolling: false }}>
      <form onSubmit={sendForm}>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              name="contenu"
              id="contenu"
              onChange={(e) => setContenu(e.target.value)}
              className="materialize-textarea"
              value={contenu}
            />
            <label className="active" htmlFor="contenu">
              Contenu
            </label>
          </div>
        </div>
        <Button>Valider</Button>
      </form>
    </Modal>
  );
};
