import React from 'react';

const RankCard = (props) => {
    if (props.score !== -1)
    {
        let rank;
        if (props.score < 33){rank = 1};
        if (props.score >= 33 && props.score < 66){rank = 2};
        if (props.score >= 66 && props.score < 100){rank = 3};
        if (props.score === 100){rank = 4}; 
        return (
            <div className="col-md-12 col-sm-12">
                <div className="form-check">
                    <div className="card">
                        <div className="row g-0">
                            <h3 className="card-text">Score: {props.score}%</h3>
                        </div>
                        <div>  
                            {rank === 1 && 
                            <div>
                                <h3>Rank: Girl Scout</h3>
                                <div>
                                    <h6>You are like a deer caught in the headlights. It’s time to rewatch the show.</h6>
                                </div> 
                            </div>}

                            {rank === 2 && 
                            <div>
                                <h3>Rank: Leader of the Puffs</h3>
                                <div>
                                    <h6>You are off to a good start, but you need to put your nose in your books if you want to do better next time.</h6>
                                </div>
                            </div>}

                            {rank === 3 && 
                            <div>
                                <h3>Rank: Editor of the Yale Daily News</h3>
                                <div>
                                    <h6>You are a bonafide fan, dedicated to getting the story right and never revealing your sources.</h6>
                                </div>
                            </div>}

                            {rank === 4 && 
                            <div>
                                <h3>Rank: President of the Hartford Chapter of the DAR</h3>
                                <div>
                                    <h6>The highest rank. You scorn the unwashed masses of plebs that surround you.</h6>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default RankCard; 