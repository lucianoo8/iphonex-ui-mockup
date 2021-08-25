import React from 'react'
import {selectArticle} from  "../features/articles/articleSlice";
import { useSelector } from 'react-redux';
import './Article.css'


function Article() {

    const article = useSelector(selectArticle);

    return (
        <div className="article">
         
              <div className="text">
                  <p dangerouslySetInnerHTML={{__html: article.title}}></p>
              </div>
              <div className="article-content">
                  <div dangerouslySetInnerHTML={{__html: article.content}}/>
               </div>
        </div>
    )
  }

export default Article;
