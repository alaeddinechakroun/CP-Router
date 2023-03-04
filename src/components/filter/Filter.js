import React from 'react'
import './Filter.css'
import StarRatingComponent from "react-star-rating-component";

const Filter = ({toggleSearch,rateMov}) => {
  return (
    <div className='Filter_holder'>
      <StarRatingComponent
    name="star" /* name of the radio input, it is required */
    onStarClick={(value)=>rateMov(value)} /* on icon click handler */
    starColor='#ffb400' /* color of selected icons, default `#ffb400` */
    emptyStarColor='white' /* color of non-selected icons, default `#333` */
   
/>
<br />
        <input type="text" placeholder='Search...' onChange={(e)=>toggleSearch(e.target.value)}/>
    </div>
  )
}

export default Filter