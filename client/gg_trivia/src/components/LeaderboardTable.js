import React from 'react';
import '../index.css'

const LeaderboardTable = (props) => {   

    props.games.filter(eachGame => eachGame.inProgress === false);

    
    //map for converting user IDs to names
    const userNames = {};
    for (let user of props.users)
    {
        userNames[user.id] = user.name;
    }

    return (
        <div>
            <div class="table-responsive">
               
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Score</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.games.slice(0,10).map((eachGame, index) => {
                    
                        let t = eachGame.date.split(/[-T:.+]/);
                        console.log(t);
                        let formattedDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
                        
                        return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{eachGame.score}</td>
                                <td>{userNames[eachGame.user]}</td>
                                <td>{eachGame.categories.map(category => {
                                    return (<div className="" key={`category${category.id}`}>{category.category}</div>)
                                })}</td>
                                <td>{formattedDate.toDateString().substring(4)}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            
        </div>
    )

    /*return (
        <div>
            <div className="container-fluid text-center">
                <h3 >Leaderboard:</h3>
                <div className="row">
                    <div className="col-md-1 col-sm-12">Rank</div>
                    <div className="col-md-2 col-sm-12">Score</div>
                    <div className="col-md-3 col-sm-12">Name</div>
                    <div className="col-md-3 col-sm-12">Category</div>
                    <div className="col-md-3 col-sm-12">Date</div>
                </div>
                {props.games.slice(0,10).map((eachGame, index) => {
                    
                    let t = eachGame.date.split(/[-T:.+]/);
                    console.log(t);
                    let formattedDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
                    
                    return (
                    <div className="row mb-3">
                        <div className="col-md-1 col-sm-12">{index+1}</div>
                        <div className="col-md-2 col-sm-12">{eachGame.score}</div>
                        <div className="col-md-3 col-sm-12">{userNames[eachGame.user]}</div>
                        <div className="col-md-3 col-sm-12">
                            {eachGame.categories.map(category => {
                                return (<div className="" key={`category${category.id}`}>{category.category}</div>)
                            })}
                        </div>
                        <div className="col-md-3 col-sm-12">{formattedDate.toDateString().substring(4)}</div>
                    </div>
                )})}
            </div>
        </div>
                        )*/
}

export default LeaderboardTable;