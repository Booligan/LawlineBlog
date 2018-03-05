import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" exact className="navbar-brand"><img src="https://cdn.furthered.com/assets/ui/images/logos/lawline-rounded-light-horizontal-16-11-3.svg" width="100" /></Link>        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-target" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapse-target">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/posts/new" exact className="nav-link" >Create A Post</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/" exact className="nav-link" >Posts</Link>
                    </li>     
                    <li className="nav-item active">
                        <Link to="/about" exact className="nav-link" >About</Link>
                    </li>                          
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;