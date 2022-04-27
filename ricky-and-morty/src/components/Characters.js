import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div className="row"> {
            characters.map((item, index) => (
                <div key={index} className="col">
                    <div className="card" style={{minWidth: "200px"}}>
                        <img src={item.image} alt="" />
                        <div className="">

                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default Characters