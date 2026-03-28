import React from "react";
import { useState } from "react";

const Tour = ({ id, image, info, name, price ,removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img className="img-location" src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p id={`tour-item-para-${id}`}>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "  read more"}
        </button>
      </p>
      <button className="delete-btn" id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
       Remove
      </button>
    </div>
  );
};

export default Tour;
