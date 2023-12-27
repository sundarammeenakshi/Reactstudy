import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Upload = ({ title, content }) => {

  const [data, setData] = useState([]);

  const [input, setInput] = useState({ file: "" });

  const handleFileChange = (e) => {
    

    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
    const newInput = { file: selectedFile };
    setInput(newInput);
    setData((prevData) => [...prevData, newInput]);
    } else {
      alert("File size exceeds 2MB limit. Please select a smaller file.");
    }
  };

    const formatFileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = parseInt(Math.floor(Math.log(size) / Math.log(k)));
    return Math.round(size / Math.pow(k, i), 2) + " " + sizes[i];
  };
 

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));

  };

 
  const row = data.map((item, index) => {
    return (
      <li  class="list-group-item"key={index}>
        <li class="list-group-item">{item.file.name}</li>
        <li class="list-group-item">{formatFileSize(item.file.size)}</li>
        <li class="list-group-item">
          <button
            type="button"
            onClick={() => handleDelete(index)}
            className="btn btn-dark"
          >
           <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </li>
      </li>
    )
  })
  
  return (
    <div className="container" style={{ paddingTop: "100px", paddingLeft: "400px" }}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p style={{ paddingRight: "20px" }} className="card-text">{content}</p>
        <div>
          
          <div style={{ paddingTop: "5px" }}>
            <ul class="list-group list-group-horizontal">
                 
                  
                    {row}
                    </ul>
          </div>

          <button type="button" class="btn" style={{ background: "red", color: "white" }}><input type="file" onChange={handleFileChange} style={{ transform: "scale(0.5)", opacity: "0", position: "absolute" }} /> browse the files</button>



        </div>

      </div>
    </div>
  );
  
};

export default Upload;