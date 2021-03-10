import React, { Component } from 'react'
import axios from 'axios'
import './Blog.css'

import NvPost from './NvPost/NvPost'
import Post from './Post/Post'
import PostModale from './PostModale/PostModale'

class Blog extends Component {
    state = {
        posts: [],
        selectPostId: null,
        toggle: false
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

    selectId = id => {
        console.log(id)
        this.setState({selectPostId: id})
        this.setState({toggle: true})
    }

    hangleModale = () => {
        this.setState({toggle: false})
    }
    
    render () {
        const posts = this.state.posts.map(post => {
            return (
                <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    isClicked={() => this.selectId(post.id)}
                />
            )
        })

        return (
            <div className="blog m-4">
                <section>
                    <NvPost />
                </section>

                <h2 className="my-4 text-xl font-bold">Choisissez un post ...</h2>

                <PostModale 
                    id={this.state.selectPostId}
                    hide={this.hangleModale}
                    toggle={this.state.toggle} 
                    // title={this.post.title}
                />

                <section className="posts flex flex-col items-center mx-auto">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;