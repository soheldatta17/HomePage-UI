import React from "react";
import Hero from '../assets/images/Cmd.png';
import '../App.css';

const TIC = [
  {
    image: require('../assets/images/Cmd.png'),
    title: "Easy management of sequential data versions",
    description:
      "The GDG (Generation Data Group) base in JCL (Job Control Language) allows the grouping of related datasets under a common name, enabling easy management of sequential data versions. It provides automatic version control by assigning unique generation numbers (e.g., G0001V00, G0002V00) to datasets, ensuring proper organization.",
  },
  {
    image: Hero,
    title: "Know About Our Application",
    description: "The GDG (Generation Data Group) base in JCL (Job Control Language) allows the grouping ",
  },
  {
    image: require('../assets/images/Cmd.png'),
    title: "Easy management of sequential data versions",
    description:
      "The GDG (Generation Data Group) base in JCL (Job Control Language) allows the grouping of related datasets under a common name, enabling easy management of sequential data versions. It provides automatic version control by assigning unique generation numbers (e.g., G0001V00, G0002V00) to datasets, ensuring proper organization.",
  },
  {
    image: require('../assets/images/Cmd.png'),
    title: "Easy management of sequential data versions",
    description:
      "The GDG (Generation Data Group) base in JCL (Job Control Language) allows the grouping of related datasets under a common name, enabling easy "
  },
];

const TextImageCard = () => {
  return (
    <>
      {TIC.map((hero, index) => (
        <div key={index} className="container d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg" style={{ maxWidth: "900px", fontFamily: "Poppins, sans-serif" }}>
            <div className="row g-0" style={{ flexDirection: "column" }}>
              {/* Image Section */}
              <div className="col-12" id="image-cards">
                <img
                  src={hero.image}
                  alt="Card Image"
                  className="img-fluid rounded-start"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>

              {/* Text Section */}
              <div className="col-12">
                <div className="card-body">
                  <h2 className="card-title fw-bold" style={{ fontSize: "25px" }}>
                    {hero.title}
                  </h2>
                  <p className="card-text" style={{ fontSize: "15px", color: "#555" }}>
                    {hero.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TextImageCard;
