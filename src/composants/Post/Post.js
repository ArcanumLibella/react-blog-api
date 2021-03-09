import React from 'react'

import './Post.css'

const Post = (props) => (
    <article className="post shadow-md rounded cursor-pointer p-8 m-4 w-full text-center bg-pink-100 hover:bg-pink-200">
        <h2 className="post__title mb-4 text-xl font-black uppercase">{props.title}</h2>
        <div>
            <div className="post__author">{props.author}</div>
        </div>
    </article>
);

export default Post;