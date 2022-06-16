import React from 'react';
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const CategoryCard = (props) => {
    return (
        <div className="col-md-12 col-sm-12"> 
            <div className="historyCard">
                <div className="row g-0">
                    <div className="historyCard-body d-grid gap-2 mb-2">
                         <Link className="btn btn-outline-success btn-lg" to={`/game/?category_id=${props.category_id}`}>{props.category_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default CategoryCard;  