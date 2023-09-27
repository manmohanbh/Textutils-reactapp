import React, {useState} from 'react'
export default function TextForm(props) {
  const handlUpClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handlLoClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = ()=>{
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event)=>{//for taking value from input box 
    // console.log("handleOnChange was clicked");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('');
  // setText("new text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Enter the text to analyze</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
      color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handlUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extraspace</button>
      
      
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
  )
}
