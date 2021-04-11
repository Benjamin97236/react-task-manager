import React from 'react'
import { Link } from 'react-router-dom';

export const Header = ({ typeHandler, type }) => {

    //Setting the type state value
    const setTypeHandler = (e) => {
        typeHandler(e.target.value);
    }

    return (
        <nav className="header">
            <div className="header-container">
                <h1>My chores (v1.0)</h1>
                <div>
                    <p>Filter:</p>
                    <select value={type} onChange={setTypeHandler}>
                        <option value="all">All tasks</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Header;
