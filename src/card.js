import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Video from "./videos/video.mp4"

const Card = ({ title, content,name,name2,input,input2 }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div className="card" style={{width:"270px"}}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Button variant="primary" onClick={handleShow}>
        live
      </Button>
          <span style={{padding:"10px"}}><Link  class="btn btn-info"to={input2}>{name2}</Link></span>
          <Modal show={show} onHide={handleClose} style={{ width:"450px",alignItems:"center",paddingTop:"170px"}}>
        
        <Modal.Body  closeButton><video src={Video} autoPlay="true" controls="controls" style={{width:"400px"}} /></Modal.Body>
        
      </Modal>
        </div>
      </div>
    );
  };
  
  export default Card;