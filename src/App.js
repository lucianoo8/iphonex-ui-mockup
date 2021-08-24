import React, { useRef } from 'react';
import IphoneX from "./IphoneX.js"
import "./App.css"
/* iphome x wiew port 375 x 812 PX */
//https://yesviz.com/devices/iphonex/
export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="app">
      <div className="editor">
         
          <p className="title">Customisation</p>
          <p>The text will reflect mobile view</p>
          <select className="ui-dropdown">
            <option>Text</option>
          </select>
          <textarea ref={editorRef} id="mytextarea" placeholder="Hello world"></textarea>
          <button  className ="ui-btn" >Publish <span className="shape"></span></button>
          
      </div>
      <div>
       <IphoneX/>  
      </div>
     
    </div>
  );
}
