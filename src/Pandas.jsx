import { React, useState } from 'react';
import Card from "./Card";
import images from "./images";

import FilterOptions from './FilterOptions';

import "./pandas.css";


function Pandas() {

    const [dateFilter, setDateFilter] = useState('');
    const [rateFilter, setRateFilter] = useState('');

    const getStartDate = (filter) => {
        const now = new Date();
        switch (filter) {
            case 'lastWeek':
                return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            case 'lastMonth':
                return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            case 'last3Months':
                return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
            case 'last6Months':
                return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
            case 'lastYear':
                return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
            default:
                return null;
        }
    };

    const filteredImages = images.filter((image) => {
        const dateCondition = dateFilter === '' || new Date(image.date) >= getStartDate(dateFilter);

        const rate = parseFloat(image.rate);

        const rateCondition =
            !rateFilter ||
            (rateFilter === 'morethan9' && rate >= 9.0) ||
            (rateFilter === 'between8and9' && rate >= 8.0 && rate < 9.0) ||
            (rateFilter === 'between7and8' && rate >= 7.0 && rate < 8.0) ||
            (rateFilter === 'between6and7' && rate >= 6.0 && rate < 7.0) ||
            (rateFilter === 'lessthan6' && rate < 6.0);

        return dateCondition && rateCondition;
    });

    const filteredImageList = filteredImages.map((image) => (
        <Card key={image.name} className="card">
            <h3 className="card__title">{image.name}</h3>
            <img
                className="card__pic"
                src={image.path}
                alt={image.alt}
                width="200"
                height="200"
            />

            <div className="card__date-rate">
                <div className="card__date">
                    <div className="gg-calendar-dates"></div>
                    <p className="date__content">Date: {image.date}</p>
                </div>

                <div className="card__rate">
                    <div className="gg-heart"></div>
                    <p className="rate__content">Rate: {image.rate}</p>
                </div>


            </div>
        </Card>
    ));



    return (
        <div className="main-pandas">
            <h2 className="main-title">Which Panda Picture Touches Your Heart?</h2>
            <div className="filter">
                <div className="filter__text">
                    Filter By:
                </div>
                <FilterOptions
                    onDateChange={(e) => {
                        setDateFilter(e.target.value);
                    }}
                    onRateChange={(e) => {
                        setRateFilter(e.target.value);
                    }}
                />
            </div>

            <div className="card-container">
                {filteredImageList}
            </div>

        </div>

    );
}

export default Pandas;