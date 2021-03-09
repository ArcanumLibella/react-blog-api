import React, { Component } from 'react'
import axios from 'axios'
import './Blog.css'

import NvPost from './NvPost/NvPost'
import Post from './Post/Post'
import PostModale from './PostModale/PostModale'

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            const lastPost = response.data.splice(0, 8)
            const postAuthor = lastPost.map(post => {
                return {
                    ...post,
                    author: "Bruce Wayne"
                }
            })
            this.setState({posts: postAuthor})
        })
    }
    
    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author}/>
        })

        return (
            <div className="blog m-4">
                <section>
                    <NvPost />
                </section>

                <h2 className="my-4 text-xl font-bold">Choisissez un post ...</h2>

                <PostModale />

                <section className="posts flex flex-col items-center mx-auto">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;