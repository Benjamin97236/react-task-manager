import React from 'react'

export const Todo = ({ post, posts, postHandler, type }) => {

    //Function for completing task/post
    const completeTask = () => {
        postHandler(
            posts.map((item) => {
                if(item.id === post.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        );
    }

    const deleteTask = () => {
        postHandler(
            posts.filter(((item) => item.id !== post.id))
        );
    }

    var fadeOut = false;
    if(type == 'completed' && !post.completed) {
        fadeOut = true;
    }
    if(type == 'uncompleted' && post.completed) {
        fadeOut = true;
    }

    var greenPost = false;
    if(post.completed) {
        greenPost = true;
    }

    return (
        <div className={fadeOut ? 'todo-container fadeOut' : 'todo-container' && greenPost ? 'todo-container completed' : 'todo-container'}>
            <h1>{post.title}</h1>
            <p>Duration: {post.deadline}</p>

            <div className="todo-description">
                <p>{post.description}</p>
            </div>

            <button onClick={completeTask}>{greenPost ? 'Uncomplete' : 'Complete'}</button>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}

export default Todo;
