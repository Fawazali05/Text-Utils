import React,{useState} from 'react'

export default function Textform(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
    
  }

  
  const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")

  }

  const handleClear = ()=>{
    let newText = "";
    setText(newText); 
    props.showAlert("Text Cleared","success")

  }

  const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed","success")

  }

  const handleCopy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")

  }
  const [text,setText] = useState("");
  function removeSpaces(string)
  {
    return string !== '';
  }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} rows="8" value={text}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea placeholder="Enter text here" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
    </div>

    <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-dark mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
    <button className="btn btn-dark " onClick={handleCopy}>Copy</button>
    <button className="btn btn-dark my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-dark my-2 mx-2" onClick={handleClear}>Clear</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}  id="myBox" onChange={handleOnChange}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter(removeSpaces).length} words and {text.length} characters</p>
        <p>{text.split(".").length - 1} number of sentences</p>
        <p>{0.008 * text.split(" ").length } minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter something to preview it here"}</p>
   </div>
    </>
  )
}

