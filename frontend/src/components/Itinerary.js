import React, { useState } from "react";
import "../styles/Itinerary.css";
import Activities from "./Activities";
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { toast } from "react-toastify";

const Itinerary = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.users._id);
  const token = useSelector((state) => state.users.token);
  let dollar = ["", "", "", "", ""];
  const { author, title, duration, price, _id, img, likes, hashtags } =
    props.data;
  const [isOpen, setOpen] = useState(false);
  const [like, setLike] = useState(true);
  const [itineraryLikes, setItineraryLikes] = useState(likes);
  const [activities, setActivities] = useState([]);

  const liked = itineraryLikes.includes(id) ? <p>lleno</p> : <p>vacio</p>;

  const getActivitiesItinerary = async () => {
    try {
      let response = await dispatch(
        itinerariesActions.getActivitiesItinerary(_id)
      );
      setActivities(response);
    } catch (err) {
      console.error(err);
    }
  };

  const likeItinerary = async () => {
    setLike(false);
    if (!token) {
      toast.error("Ups! You must be signed in to like this itinerary", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let response = await dispatch(
        itinerariesActions.likeItinerary(_id, token)
        );
        setItineraryLikes(response.data.response);
      }
      setLike(true);
  };

  const handleClick = () => {
    setOpen(!isOpen);
    if (!isOpen && !activities.length) {
      getActivitiesItinerary();
    }
  };
  return (
    <section className="itinerary-card" key={_id}>
      <div className="itinerary-container">
        <div className="author-info">
          <img src={author.imgUrl} alt="User" className="author-picture" />
          <p className="author-name">{author.name}</p>
        </div>
        <div
          className="itinerary-info"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${img})`,
          }}
        >
          <h2 className="itinerary-title">{title}</h2>
          <div className="itinerary-stats">
            <p className="itinerary-price">
              Price:{" "}
              {dollar.fill("💲", 0, price).map((e) => {
                return e;
              })}
            </p>
            <p className="itinerary-duration">Duration: {duration} hours</p>
          </div>
          <div>
            <button
              className="itinerary-likes"
              style={{ cursor: "pointer" }}
              onClick={(like ? likeItinerary : null)}
            >
              {liked}
            </button>
            <span className="amount-likes itinerary-likes">
              {itineraryLikes.length}
            </span>
          </div>
          <ul className="itinerary-hashtags">
            {hashtags.map((hashtag, i) => {
              return <li key={i}>#{hashtag}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={isOpen ? "activities-display" : "itinerary-activities"}>
        <h3
          className="activities-title"
          style={{ display: isOpen ? "block" : "none" }}
        >
          Activities
        </h3>
        <div
          className="activities-section"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <div className="activities-carousel">
            <Activities activities={activities}></Activities>
          </div>
          <div className="comments"></div>
        </div>
      </div>
      <button className="view-more" onClick={handleClick}>
        View More{" "}
        <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i>
      </button>
    </section>
  );
};

export default Itinerary;
