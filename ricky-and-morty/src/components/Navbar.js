import React from 'react'

const Navbar = ({ brand }) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span className="navbar-brand mb-0 h1">{brand}</span> 
                </div>
            </nav>
        </div>
    )
}

export default Navbar