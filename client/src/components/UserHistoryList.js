import React from 'react';
import '../index.css'

const UserHistoryList = (props) => {

    props.games.filter(eachGame => eachGame.inProgress === false);
    return (<ul class="list-group">
                <li class="list-group-item">
                    <div className="row">
                        <div className="col-4"><span className="fw-bold">Date</span></div>
                        <div className="col-4"><span className="fw-bold">Category</span></div>
                        <div className="col-4"><span className="fw-bold">Score</span></div>
                    </div>
                </li>
                {props.games.map((eachGame, i) => {
                    let t = eachGame.date.split(/[-T:.+]/);
                    let formattedDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
                    console.log(formattedDate);
                    return (
                        <li class="list-group-item">
                            <div className="row">
                                <div className="col-4">{formattedDate.toDateString().substring(4)}</div>
                                <div className="col-4">
                                    {eachGame.categories.map(category => {
                                        return (<div className="" key={`category${category.id}`}>{category.category}</div>)
                                    })}
                                </div>
                                <div className="col-4">{eachGame.score}</div>
                                </div>
                        </li>
                    )
                })}
            </ul>
    );
};

export default UserHistoryList;