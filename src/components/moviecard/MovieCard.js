import React from 'react'
import './MovieCard.css'
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({e}) => {
  return (
      <div className="Card-div">
        <div className="image_holder">
            <img src={e.img} alt="" />
        </div>
        <div className="description">
            <h1>{e.title}</h1>
            <p>{e.description}</p>
            <StarRatingComponent
          className="rating"
          // name="rate" /* name of the radio input, it is required */
          value={
            e.rate
          } /* number of selected icon (`0` - none, `1` - first) */
          starCount="5" /* number of icons in rating, default `5` */
          //onStarClick={Function(nextValue, prevValue, rate)} /* on icon click handler */
          //onStarHover={Function(nextValue, prevValue, rate)} /* on icon hover handler */
          //onStarHoverOut={Function(nextValue, prevValue, rate)} /* on icon hover out handler */
          //renderStarIcon={Function(nextValue, prevValue, rate)} /* it should return string or react component */
          //renderStarIconHalf={Function(nextValue, prevValue, rate)} /* it should return string or react component */
          starColor="#ffb400" /* color of selected icons, default `#ffb400` */
          emptyStarColor="grey" /* color of non-selected icons, default `#333` */
          editing="true" /* is component available for editing, default `true` */
        />
        </div>


      </div>
    
  )
}

export default MovieCard