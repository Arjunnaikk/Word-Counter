import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text converted to UpperCase!! ","success")
  }
  const handleLowerClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text converted to LowerCase!! ","success")
  }
  const handleClearClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = ''
    setText(newText)
    props.showAlert("Text cleared!! ","success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard!! ","success")
  }
  
  const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value)
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Space removed!! ","success")
  }
  const [text, setText] = useState("")
  

  return (
    <>
    <div style={{color: props.mode === 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'?'#c1c1c1':'#d3d3d3'}} onChange={handleOnChange} id="mybox" placeholder="Enter a Text" rows="8"></textarea>
  </div>
  <button className='btn btn-dark mx-3 my-2' onClick={handleUpClick}>Convert to uppercase</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleLowerClick}>Convert to lowercase</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleExtraSpace}>Remove Extra space</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleClearClick}>Clear Text</button>
  </div>
  <div className="container my-4" style={{color: props.mode === 'light'?'black':'white'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter a text above to preview it here"}</p>
  </div>
  </>
  )
}
