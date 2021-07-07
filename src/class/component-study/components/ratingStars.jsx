import React from 'react';

const RatingStars = (props) => (
    <span
        className={['rating-stars', props.rating.score,'3333']}
        aria-label={props.rating.label}
    ></span>
);

export default RatingStars;