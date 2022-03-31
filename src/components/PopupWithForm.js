import Popup from "./Popup";

function PopupWithForm({
  name,
  isOpen,
  title,
  children,
  submitButtonText,
  onClose,
  onSubmit,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <div className="popup__form">
        <form
          className="popup__form-submit"
          name={`popup_${name}`}
          onSubmit={onSubmit}
        >
          <h2 className="popup__form-title"> {`${title}`} </h2> {children}{" "}
          <button type="submit" className="popup__form-save-button">
            {" "}
            {`${submitButtonText}`}{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </Popup>
  );
}

export default PopupWithForm;
