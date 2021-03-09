import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './PostModale.css'

class PostModale extends Component {
    render () {
        return (
            this.props.id ?
                <div className="fullPost relative mx-auto p-8 w-4/5 lg:w-full bg-white shadow-lg rounded text-center max-w-screen-sm">
                    <h1 className="post__title mb-4 text-xl font-black uppercase">Titre</h1>
                    <p>Contenu</p>
            
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
