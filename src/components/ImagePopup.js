import React from "react";

import Popup from "./Popup";

export default function ImagePopup(props) {
  return (
    <Popup open={props.open} handleClose={props.handleClose}>
      <div>
        {props.selectedCard && props.selectedCard.link ? (
          <img
            src={props.selectedCard.link}
            alt=""
            className="image-container__image-popup"
          />
        ) : null}
        <p className="image-container__text-image">{props.selectedCard.name}</p>
      </div>
    </Popup>
  );
}


