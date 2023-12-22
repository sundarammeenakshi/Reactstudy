import Dropdown from 'react-bootstrap/Dropdown';
import pic from "./images/pdf.svg"
import { Link } from "react-router-dom";
import './merge';
import './split';
import  './compress'
import  "./pdf to word";
import"./pdf to point";
import  "./pdf to xl";
import  "./wordtopdf";


function Header (){
    
   
  


    return(
        <nav class="navbar" style={{background:"#f2f2f2",height:"70px"}}>
          
          <div style={{float:"left",display:"inline"}}>
         
          <div style={{display:"inline"}}>
          
          <ul style={{listStyle:"none",paddingTop:"15px"}}>
          <img src={pic} style={{width:"100px"}} alt='logo'/>
          <li style={{display:"inline",paddingLeft:"70px",fontSize:"13px"}}>
            <Link to="/merge"  style={{color:"black",textDecoration: "none",}}>MERGE PDF</Link>
          </li>
          <li  style={{display:"inline",paddingLeft:"30px",fontSize:"13px"}}>
            <Link to="/split" style={{color:"black",textDecoration: "none"}}>SPLIT PDF</Link>
          </li>
          <li style={{display:"inline",paddingLeft:"30px",fontSize:"13px"}}>
            <Link to="/compress" style={{color:"black",textDecoration: "none"}}>COMPRESS PDF</Link>
          </li>
        
          <Dropdown style={{display:"inline",paddingLeft:"30px",fontSize:"13px"}}>
      <Dropdown.Toggle style={{background:"white",color:"black"}} id="dropdown-basic">
       CONVERT PDF
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"500px"}}>
        <h6>CONVERT TO PDF</h6>
        <Link style={{textDecoration:"none"}} to="/pdf to word">PDF TO WORD</Link>
      </Dropdown.Menu>
    </Dropdown>
        
        </ul>
        </div>
        </div>
</nav>
    )
}

export default Header;