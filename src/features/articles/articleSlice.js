import { createSlice } from  '@reduxjs/toolkit';

const initialState =  {article: {
    title:"",
    content:""
}};


export  const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
      set_article_title (state, action) {
        state.article.title = action.payload;
      },
      set_article_content  (state,action)  {
        state.article.content = action.payload;
      },
    },
  });
  
  export const { set_article_title, set_article_content } = articleSlice.actions;
  
  export const selectArticle = (state) => state.article.article;

  export default articleSlice.reducer; 
