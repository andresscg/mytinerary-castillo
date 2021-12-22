import React from 'react'
import Carousel from "nuka-carousel";
import '../styles/Activities.css'

const Activities = (props) => {
  return (
    <div>
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={false}
        animation="zoom"
        cellAlign="center"
        slidesToShow={1}
        renderBottomCenterControls={null}
      >
        {props.activities.map(activity => {
          return (
            <div key={activity._id} className="activity-slide" style={{backgroundImage: `url(${activity.img})`}}>
              <h3 className="activity-title">{activity.title}</h3>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Activities
