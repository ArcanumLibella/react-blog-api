import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import './PostModale.css'

class PostModale extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        console.log('UPDATED')

        if(this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({
                        loadedPost: response.data
                    })
                })
            }
        }
    }

    render () {
        return (
            this.state.loadedPost ?
                <div className="fullPost relative mx-auto p-8 w-4/5 lg:w-full bg-white shadow-lg rounded text-center max-w-screen-sm">
                    <h1 className="post__title mb-4 text-xl font-black uppercase">{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
            
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className="absolute top-4 right-4 cursor-pointer"
                        // onClick={() => this.removeContact(this.props.id, value.dispatch)}
                    />
                
                </div>
            : null
        )
    }
}

export default PostModale;
