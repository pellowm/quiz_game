import React from 'react';

const UserHistoryCard = (props) => {
        return (
            <div className="col-md-12 col-sm-12">
                <div className="form-check">
                    <div className="card">
                        <div className="row g-0">
                            <strong className="card-text">Date: {props.date}</strong>
                        </div>
                        <div>
                        <strong className="card-text">Categories: </strong>
                            {props.categories.map(category => {
                                
                                return (<span key={`category${category.id}`}>{category.category}</span>)
                            })} 
                        </div>
                        <strong className="card-text">Score: {props.score}</strong>
                    </div>
                </div>
            </div>
        )
    };

export default UserHistoryCard; 