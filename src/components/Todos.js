import React from 'react'
import Todo from './Todo';

export const Todos = ({ limiter, type, posts, typeFilter, postHandler }) => {
    return (
        <div className="todos-holder">
            {typeFilter.length > 0 ? typeFilter.map((post) => (
                <Todo post={post} posts={posts} postHandler={postHandler} type={type}/>
            )) : <p>No tasks to show.</p>}
        </div>
    )
}

export default Todos;
