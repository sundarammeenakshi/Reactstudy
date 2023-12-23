

const Upload = ({ title, content }) => {
    return (
      <div className="container" style={{paddingTop:"150px",paddingLeft:"400px"}}>
        <div>
          <h1 className="card-title">{title}</h1>
          <p  style={{paddingRight:"20px"}} className="card-text">{content}</p>

          <button type="button" class="btn btn-light"><input type="file" style={{transform:"scale(3)",opacity:"0",position:"absolute"}} /> Light</button>
          
          
        </div>
      </div>
    );
  };
  
  export default Upload;