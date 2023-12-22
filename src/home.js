import Header from "./header";
import Card from "./card";
import "./merge"
import "./split"
import "./compress"
import  "./pdf to word";
import"./pdf to point";
import  "./pdf to xl";
import  "./wordtopdf";
import Footer from "./footer";

function Home(){
    return(
        <>
        <div><Header/></div>
        <div>
            <h1 style={{paddingLeft:"100px",paddingTop:"30px",fontSize:"45px"}}>Every tool you need to work with PDFs in one place</h1>
            <h4 style={{paddingLeft:"130px",fontSize:"22px"}}>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge,</h4>
            <h5 style={{paddingLeft:"200px",fontSize:"20px"}}>split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h5>
        </div>
        <div class="container-fluid" style={{paddingTop:"20px",paddingLeft:"100px"}}>
        <div class="row">
          <Card  title="Merge pdf"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
           <Card  title="Split Pdf" content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/split"/>&nbsp;&nbsp;&nbsp;
          <Card  title="Compress pdf"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/compress"/>&nbsp;&nbsp;&nbsp;
          <Card  title="PDF to WORD "  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/pdf to word"/>
          </div>
          <div class="row" style={{paddingTop:"10px"}}>
          <Card  title="PDF to POWERPOINT"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/pdf to point"/>&nbsp;&nbsp;&nbsp;
           <Card  title="PDF to EXCEL " content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/pdf to xl"/>&nbsp;&nbsp;&nbsp;
          <Card  title="WORD to PDF"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/wordtopdf"/>&nbsp;&nbsp;&nbsp;
          <Card  title="POWERPOINT to PDF"  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/merge"/>
          </div>
          <div class="row"style={{paddingTop:"10px"}}>
          <Card  title="EXCEL to PDF"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
           <Card  title="Edit PDF" content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="PDF to JPG"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="JPG to PDF"  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/merge"/>
          </div>
          <div class="row" style={{paddingTop:"10px"}}>
          <Card  title="Sign PDF"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
           <Card  title="watermark" content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="Rotate PDF"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="HTML to PDF"  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/merge"/>
          </div>
          <div class="row" style={{paddingTop:"10px"}}>
          <Card  title="Unlock Pdf"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
           <Card  title="Protect Pdf" content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="organize pdf"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="PDF to PDF A "  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/merge"/>
          </div>
          <div class="row" style={{paddingTop:"10px"}}>
          <Card  title="Repair PDF"  content="combine pdf in order you want with the easiest PDF merger avaiable" name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
           <Card  title="page number" content="Separate one page or a whole set for easy conversion into independent PDF files." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="Scan to PDF"  content="Reduce file size while optimizing for maximal PDF quality." name="live" name2="demo" input="/merge" input2="/merge"/>&nbsp;&nbsp;&nbsp;
          <Card  title="OCR PDF "  content="Convert your PDF to WORD documents with incredible accuracy." name="live" name2="demo" input="/merge" input2="/merge"/>
          </div>
        </div>
        <div><Footer /></div>
        </>
    )
}

export default Home;