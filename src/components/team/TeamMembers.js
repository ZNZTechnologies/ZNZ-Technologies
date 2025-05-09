import React, { useState } from "react";
import "./Team.css";
function TeamMembers() {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(0);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="body">
      <div className="hr-line mt-4 mb-4"></div>
      <div className="custom-container d-flex flex-column align-items-stretch">
        <div
          className={`section section-1 ${
            activeSection === 1 ? "grow" : "shrink"
          } shadow-orange`}
          onClick={() => toggleSection(1)}
        >
          <h3>Management</h3>
          <p
            className={`main-text ${
              activeSection === 1 ? "show animate" : "hide"
            }`}
          >
            {" "}
            At ZNZ Technologies, our manager is the guiding force, steering our
            team toward success with clarity and confidence, and empowering us
            to reach new heights together.
          </p>
          <div className="cards-container">
            <div
              className={`card ${
                activeSection === 1 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/ceo_znz.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Sher Alam</div>
                  <div className="designation">CEO</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 1 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/ramzan.jpeg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Ramzan</div>
                  <div className="designation">Manager</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 1 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/zunaira.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Zunaira Murtaza</div>
                  <div className="designation">HR Manager</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`section section-2 ${
            activeSection === 2 ? "grow" : "shrink"
          } shadow-pink`}
          onClick={() => toggleSection(2)}
        >
          {" "}
          <h3>Developer</h3>
          <p
            className={`main-text ${
              activeSection === 2 ? "show animate" : "hide"
            }`}
          >
            Our developer at ZNZ Technologies, the unwavering backbone of our
            technical prowess, forging robust solutions and setting the standard
            for excellence within our team.
          </p>
          <div className="cards-container">
            <div
              className={`card ${
                activeSection === 2 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/Fayyaz.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Fayyaz Alam</div>
                  <div className="designation">Frontend Developer</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 2 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/ali_shan.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Ali Shan Masood</div>
                  <div className="designation">Frontend Developer</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 2 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/ahmed-nadeem.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Ahmad Nadeem</div>
                  <div className="designation">Backend Developer</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`section section-3 ${
            activeSection === 3 ? "grow" : "shrink"
          } shadow-blue`}
          onClick={() => toggleSection(3)}
        >
          <h3>Designer</h3>

          <p
            className={`main-text ${
              activeSection === 3 ? "show animate" : "hide"
            }`}
          >
            Our creative designer at ZNZ Technologies, crafts the visual stories
            that breathe life into our innovations, and inspire us all with each
            stroke of creativity.
          </p>
          <div className="cards-container">
            <div
              className={`card ${
                activeSection === 3 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/taimoor.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Taimoor Akhtar</div>
                  <div className="designation">Graphic Designer</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 3 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/Benish.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Benish Mehboob Ali</div>
                  <div className="designation">Intern Grapic Desiner</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`section section-4 ${
            activeSection === 4 ? "grow" : "shrink"
          } shadow-blue`}
          onClick={() => toggleSection(4)}
        >
          <h3>Social Media Marketing</h3>

          <p
            className={`main-text ${
              activeSection === 4 ? "show animate" : "hide"
            }`}
          >
            At ZNZ Technologies, our digital marketing expert is the digital
            maestro, orchestrating online success, and guiding our team towards
            victory in the ever-evolving world of digital possibilities.
          </p>
          <div className="cards-container">
            <div
              className={`card ${
                activeSection === 4 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/ali-hasan.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Ali Hasan</div>
                  <div className="designation">
                    SM Manger | Content Writer
                  </div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 4 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/taiba.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Taiba Akhtar</div>
                  <div className="designation">PR Manager</div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 4 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/umer-khan.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Umer Khan</div>
                  <div className="designation">D O P </div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`card ${
                activeSection === 4 ? "show animate" : "hide"
              }`}
            >
              <div className="card-image-container">
                <div className="blue-overlay"></div>
                <img
                  src="assets/photos/aleena.jpg"
                  alt="..."
                  className="card-image"
                />
                <div className="person-info">
                  <div className="person-name">Aleena Muzafar</div>
                  <div className="designation">Host</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
