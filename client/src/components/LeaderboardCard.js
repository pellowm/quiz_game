import React from 'react';

const LeaderboardCard = (props) => {
    
        let t = props.date.split(/[-T:.+]/);
        console.log(t);
        let formattedDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
        return (
            <div className="col-md-12 col-sm-12">
                <div className="form-check">
                    <div className="card">
                        <div className="row g-0">
                            <strong className="card-text">Name: {props.user}</strong>
                        </div>
                        <div className="row g-0">
                            <strong className="card-text">Date: {formattedDate.toDateString()}</strong>
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

export default LeaderboardCard; 