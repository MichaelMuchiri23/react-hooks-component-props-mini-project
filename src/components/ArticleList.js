import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList({post}){

    const posts=blogData.posts.map((obj)=>{
        return(
            <Article key={obj.id} title={obj.title} date={obj.date} preview={obj.preview} />
        )
    })
    
    return(
        <main>
         {posts}
        </main>
    )
}

export default ArticleList