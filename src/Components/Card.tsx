import React, { Component } from 'react';
import Reaction from './Reaction';

class BlogCard extends Component {
    render() {
        return (
            <div className="bg-white shadow-md rounded-md p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-black text-center">Title</h1>
                <h2 className="text-lg font-semibold text-black text-center">Author</h2>
                <p className="mt-2 text-gray-600 text-black text-center">Content</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </button>
                <br />
                <Reaction />
            </div>
        )
    }
}
export default BlogCard;
