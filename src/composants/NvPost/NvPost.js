import React, { Component } from 'react'
import axios from 'axios'

class NvPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Bruce Wayne'
    }

    postArticle = () => {
        const newPost = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        axios
            .post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
            console.log(response)
        })

        // Pour vider les inputs après envoi
        this.setState({
            title: '',
            content: '',
            author: 'Bruce Wayne' 
        })
    }

    render () {
        return (
            <div className="newPost bg-pink-100 p-4 rounded">
                <h2 className="mb-4 text-xl font-bold">Ajouter un article</h2>

                <fieldset className="flex flex-col mb-4">
                    <label className="mb-2 font-medium">Titre</label>
                    <input className="p-2 rounded" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                </fieldset>

                <fieldset className="flex flex-col mb-4">
                    <label className="mb-2 font-medium">Contenu</label>
                    <textarea className="p-2 rounded" rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                </fieldset>

                <fieldset className="flex flex-col mb-4">
                    <label className="mb-2 font-medium">Auteur</label>
                    <select className="p-2 rounded" value= {this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                        <option value="Bruce">Bruce Wayne</option>
                        <option value="Ellen">Ellen Ripley</option>
                        <option value="Clark">Clark Kent</option>
                    </select>
                </fieldset>

                <button 
                    className="p-4 rounded w-full font-bold uppercase text-white bg-pink-500 hover:bg-pink-600 cursor-pointer transition-all"
                    onClick={this.postArticle}>
                        Ajouter un article
                </button>
            </div>
        );
    }
}

export default NvPost;