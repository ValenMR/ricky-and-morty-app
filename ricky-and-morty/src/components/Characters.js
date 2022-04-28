import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div className="row"> {
            characters.map((item, index) => (
                <div key={index} className="col">
                    <div className="card" style={{minWidth: "200px"}}>
                        <img src={item.image} alt="" />
                        <div className="card-boby">
                            <h5 className="card-tittle">{item.name}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default Characters