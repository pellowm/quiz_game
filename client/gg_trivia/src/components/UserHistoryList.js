import React from 'react';
import UserHistoryCard from './UserHistoryCard.js';
import '../index.css'

const UserHistoryList = (props) => {   

    props.games.filter(eachGame => eachGame.inProgress === false);
    return (
        <div className="container-fluid m-4 champions text-center">
            <div className="row">
            <div className="col-md-3 col-sm-12"/> 
            <div className="col-md-6 col-sm-12 rounded-3 p-3 active-area">  
            <h1 className="">{`Your Game History`}:</h1>
                {/*<div className="row">*/}
                <ul class="list-group">
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
                            /*<UserHistoryCard 
                            //add user info here after figuring out auth0
                                key={`user${props.games[i].id}`}
                                game_id={props.games[i].id}
                                score={props.games[i].score}
                                date={props.games[i].date}
                                categories={props.games[i].categories}
                            />*/
                        )
                    })}
                </ul>
                {/*</div>*/}
            </div>
            <div className="col-md-3 col-sm-12"/> 
            </div>
            
        </div>
    );
};

export default UserHistoryList;