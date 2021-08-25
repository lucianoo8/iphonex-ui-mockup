import React, { useState } from "react";
import App from '../App'

export const articleContext =  React.createContext();

const ArticleData = () =>{
    const[articleTitle, setArticleTitle] = React.useState('');
    const[articleContent, setArticleContent] = React.useState('');
    
    return (
        <div> 
            <articleContext.Provider value={{articleTitle,setArticleTitle,articleContent,setArticleContent}} >
              <App />
            </articleContext.Provider>
        </div>
    )
};

export default ArticleData;
