import React, { Component } from 'react'

class NvPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Bruce Wayne'
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
                        <option value="Bruce">Bruce</option>
                        <option value="Ellen">Ellen</option>
                        <option value="Clark">Clark</option>
                    </select>
                </fieldset>

                <button className="p-4 rounded w-full font-bold uppercase text-white bg-pink-500 hover:bg-pink-600 cursor-pointer transition-all">Ajouter un article</button>
            </div>
        );
    }
}

export default NvPost;