import React from "react";
import '../App.css';

const TIC = [
  {
    title: "GDG Management",
    description:
      "Efficiently manage Generation Data Groups (GDGs) on the mainframe. Create and update GDG bases, and list generations using IDCAMS for seamless organization of transaction logs.",
  },
  {
    title: "Transaction Log Archival",
    description:
      "Automate the archival of older transaction logs to sequential files. Ensure compliance and long-term storage while maintaining easy access to historical data.",
  },
  {
    title: "Easy Management of Sequential Data Versions",
    description:
      "The GDG (Generation Data Group) base in JCL (Job Control Language) allows the grouping of related datasets under a common name, enabling easy management of sequential data versions. It provides automatic version control by assigning unique generation numbers (e.g., G0001V00, G0002V00) to datasets, ensuring proper organization.",
  },
  {
    title: "Modern GUI Interface",
    description:
      "Experience a Graphical User Interface (GUI) designed to simplify mainframe operations. Manage GDGs, trigger archival processes, and visualize data trends with ease.",
  },
  {
    title: "GDG Metadata Viewing",
    description:
      "Access and analyze GDG metadata effortlessly through the GUI. Gain insights into dataset details, generation numbers, and archival status at a glance.",
  },
  {
    title: "Transaction Log Addition",
    description:
      "Add new transaction logs to GDGs seamlessly using the intuitive GUI. Simplify data entry and ensure accurate logging for better data management.",
  },
  {
    title: "Data Trend Visualization",
    description:
      "Visualize transaction trends through interactive graphs. Gain actionable insights into data patterns and make informed decisions with ease.",
  },
  {
    title: "z/OS API Integration",
    description:
      "Seamlessly integrate with z/OS APIs to bridge the gap between traditional mainframe operations and modern interfaces. Ensure smooth communication and data flow.",
  },
];

const TextImageCard = () => {
  return (
    <>
      {TIC.map((hero, index) => (
        <div key={index} className="container d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg" style={{ maxWidth: "900px", fontFamily: "Poppins, sans-serif" }}>
            <div className="row g-0" style={{ flexDirection: "column" }}>
              

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
