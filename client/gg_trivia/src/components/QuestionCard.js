import React from 'react';

const QuestionCard = (props) => {
        return (
            <div className="col-md-12 col-sm-12">
                <div className="form-check">
                    <div className="card">
                        <div className="row g-0">
                            <h3 className="card-text">{props.question}</h3>
                        </div>
                        <fieldset>
                        {
                            Object.entries(props.mult).map(([letter,description]) => {
                                return (
                                    <div key={letter} className="col-sm-10"> 
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${letter}`} value={`${letter}`}  onChange={props.onRadioSelected} checked={letter===props.guess}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            {description}
                                        </label>
                                    </div>
                                    )
                                }
                            )
                        }
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    };

export default QuestionCard; 