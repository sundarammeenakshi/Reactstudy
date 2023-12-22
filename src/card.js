import { Link } from "react-router-dom";

const Card = ({ title, content,name,name2,input,input2 }) => {
    return (
      <div className="card" style={{width:"270px"}}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Link  class="btn btn-info" to={input}>{name}</Link>
          <span style={{padding:"10px"}}><Link  class="btn btn-info"to={input2}>{name2}</Link></span>
          
        </div>
      </div>
    );
  };
  
  export default Card;