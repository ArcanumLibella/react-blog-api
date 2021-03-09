import React, { Component } from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
class Blog extends Component {

    render () {

        return (
            <div className="blog m-4">
                <section>
                    <NvPost />
                </section>

                <h2 className="my-4 text-xl font-bold">Choisissez un post ...</h2>

                <PostModale />

                <section className="posts">
                </section>
            </div>
        );
    }
}

export default Blog;