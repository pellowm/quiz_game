import React from 'react';

const QuestionCard = (props) => {
        return (
            <div className="mb-3">
                <h4 className="">{props.question}</h4>
                {props.gameInProgress === true && <div className="">
                    {
                        Object.entries(props.mult).map(([letter,description]) => {
                            return (
                                <div key={letter} className="form-check"> 
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${letter}`} value={`${letter}`}  onChange={props.onRadioSelected} checked={letter===props.guess}/>
                                    <label className="form-check-label" htmlFor={`flexRadioDefault${letter}`}>{description} </label>
                                </div>
                                )
                            }
                        )
                    }
                </div>}
             </div>
        )
    };

export default QuestionCard; 