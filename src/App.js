import React  from 'react';
import IphoneX from "./components/IphoneX"
import ArticleEditor from './components/ArticleEditor'
import "./App.css"

export default function App() {

  return (
    <div className="app">
     <div className="editor-wrapper">
        <ArticleEditor />
     </div>
      <div className="iphonex-wrapper">
         <IphoneX />  
      </div>
     
    </div>
  );
}


