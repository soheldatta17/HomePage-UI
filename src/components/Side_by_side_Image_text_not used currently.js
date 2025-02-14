import React from "react";

const TextImage = ({ image, title, description }) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={image}
            alt="Side Image"
            className="img-fluid rounded shadow"
            width={600}
            height={600}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">{title}</h2>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
