import React , {useState} from 'react'
export default function Textform(props) {
  const [ mystyle, setmystyle] = useState({
    color : 'white',
    backgroundColor : 'black',
    border : '1px solid white'
  })
  const [btntext , newbtntext] = useState("Enable Dark Mode")

   const handeldarkmode = () =>{
    if(mystyle.color === 'black'){
      setmystyle({
        color : 'white',
        backgroundColor : 'black'
      })
      newbtntext("Enable Light Mode")
    }
    else{
      setmystyle({
        color :'black',
        backgroundColor :'white'
      })
      newbtntext("Enable Dark Mode")
    }
   }
    const handelUpclick = () =>{

        let newText = text.toUpperCase();
        setText(newText)
    }
    const handellowclick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelOnchange = (event) =>{ 
        console.log("on change")
        setText(event.target.value)
    }
    const handelonclear = () =>{
      let newText = '';
      setText(newText)
    }
    const handelonnumber = () =>{
      let newText = text.replace(/[^0-9]/g, '');
      setText(newText)
    }
    const [text , setText ] = useState('enter your text');
  return (
    <>
    < div className="container" style={mystyle}>
    <h2 style={mystyle}>{props.heading}</h2>
<div className="mb-3"style={mystyle}>
  <textarea className="form-control"style={mystyle}  value = {text} onChange = {handelOnchange} id="my-box" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2"style={mystyle} onClick={handelUpclick}>Click To Change In Upper Case</button>
<button className="btn btn-primary mx-2 my-2"style={mystyle} onClick={handellowclick}>Click To Change In Lower Case</button>
<button className="btn btn-primary mx-2 my-2"style={mystyle} onClick={handelonnumber}>Click To Get Number From Text</button>
<button className="btn btn-primary mx-2 my-2"style={mystyle} onClick={handelonclear}>Click To Clear the Text</button>
<button className="btn btn-primary mx-2 my-2"style={mystyle} onClick={handeldarkmode}>{btntext}</button>

    </div>
    <div className="container style={mystyle} my-2"style={mystyle}>
        <p><b>{text.split(".").length-1}</b> Sentences <b>{text.split(" ").length-1}</b> Words And <b>{text.length}</b> Characters  </p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
