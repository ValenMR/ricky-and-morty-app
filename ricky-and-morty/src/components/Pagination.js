import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }

    return (
        <nav className = "my-5">
            <div>
                <ul className="pagination justify-content-center">
                    {
                        prev ? ( //si existe un link de previo, el link antes del que nos ideron
                            <li className="page-item">
                                <button className="page-link" onClick={handlePrevious}>
                                    Anterior
                                </button>
                            </li>
                        ) : null
                    }
                    {
                        next ? (
                            <li className="page-item">
                                <button className="page-link" onClick={handleNext}>
                                    Siguiente
                                </button>
                            </li>
                        ) : null
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Pagination