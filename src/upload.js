

const Upload = ({ title, content }) => {
    return (
      <div className="container" style={{paddingTop:"150px",paddingLeft:"400px"}}>
        <div>
          <h1 className="card-title">{title}</h1>
          <p  style={{paddingRight:"20px"}} className="card-text">{content}</p>
          <input type="file" style={{color:"transparent"}}/> 
          
        </div>
      </div>
    );
  };
  
  export default Upload;