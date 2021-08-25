import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Editor } from '@tinymce/tinymce-react'; 
import "./ArticleEditor.css";
import { useDispatch } from 'react-redux';
import {set_article_title,set_article_content} from "../features/articles/articleSlice"

function ArticleEditor() {

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
       e.preventDefault();
       // Do something
     }

    const updateArticleTitle = e =>{
        dispatch(set_article_title( e.target.value));
    }
    const updateArticleContent = e =>{
      dispatch(set_article_content( e.target.getContent()));
    }
    return (
        <div className="editor">
    
         <form onSubmit={handleSubmit}>
                     <p className="title">Customisation</p>
            <p>The text will reflect mobile view</p>
            <select  onChange={updateArticleTitle} className="ui-dropdown">
                <option value="Text">Text</option>
                <option value="Text 2">Text 2</option>
                <option value="Text 3">Text 3</option>
            </select>

            <Editor
                initialValue=""
                init={{
                height: 250,
                menubar: false,
              
              
               toolbar1:
                    'cut copy paste  paste-text|undo redo  |abc| image flip-vertically insert-character emoji| break icon| sourceselect | bold italic underline strikethrough |removeformat '
                   ,

                 toolbar2:
                    'list-num-default list-bull-default| outdent indent |quote| alignleft   alignjustify alignright aligncenter|styleselect|fontselect|fontsizeselect|forecolor backcolor',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',




                }}

                onChange={updateArticleContent}
             />
            <button type="submit" className ="ui-btn" ><span>Publish</span> <ChevronRightIcon/></button>
          </form>
      </div>
    )
}

export default ArticleEditor
