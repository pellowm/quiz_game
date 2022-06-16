import React from 'react';
import CategoryCard from './CategoryCard.js';
import '../index.css'

const CategoryCardList = ({ categories }) => {   

    return (
        <div className="container-fluid champions text-center">
            <div className="row">
            <div className="col-md-4 col-sm-12"/> 
            <div className="col-md-4 col-sm-12">  
                <div className="row">
                    {categories.map((eachCategory, i) => {
                        return (
                            <CategoryCard 
                                key={`category_${categories[i].id}`}
                                category_id={categories[i].id}
                                category_name={categories[i].category}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="col-md-4 col-sm-12"/> 
            </div>
            
        </div>
    );
};

export default CategoryCardList;