import React from 'react';
import Avatar from './avatar';
import RatingStars from './ratingStars';
import ReplyComment from './replyComment';

const DeliveryComment = (props) => {
    return (
        <div className="delivery-comment">
            <div className="commentary">
                <Avatar user={props.user} />
                <RatingStars rating={props.user.rating}/>
                <strong className="user-name">{props.user.name}</strong>
                <time className="comment-date">{props.user.createdAt}</time>
                <p className="comment-content">{props.user.content}</p>
                <ReplyComment/>
            </div>
        </div>
    )
}
export default DeliveryComment;
