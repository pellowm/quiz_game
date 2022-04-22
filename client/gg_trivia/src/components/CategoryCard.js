import React from 'react';
import { Link } from "react-router-dom";


const CategoryCard = (props) => {
        return (
            <div className="col-md-12 col-sm-12"> 
                <div className="historyCard">
                    <div className="row g-0">
                        <div className="historyCard-body text-center">
                            <button>
                                <Link className="nav-link" to={`/game/?category_id=${props.category_id}`}>{props.category_name}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


export default CategoryCard;  