import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
const NavSidebar = ({ icon }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="navBtn">
        {icon}
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
          {/* <img src="assets/photos/cross.png" alt="" /> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar__container">
            {/* <img src="assets/photos/blueLogo.png" alt="" width={120} /> */}
            <div className="navbar__linking">
              <Link to={"/"}>Home</Link>
              {/* <a href="/"></a> */}
              <Link to={"/about"}>About</Link>
              {/* <a href="/About">About</a>   */}
              {/* <a href="/Team">Team</a> */}
              <Link to={"/team"}>Team</Link>
              {/* <a href="/Portfolio">Projects</a> */}
              {/* <a href="/Contact">Contact</a> */}
              <Link to={"/portfolio"}>Portfolio</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavSidebar;
