import React, { useState, useRef, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import Swal from 'sweetalert2'

const Comment = (props) => {

  const userId = useSelector(state => state.users._id)
  const token = useSelector(state => state.users.token)
  const inputHandler = useRef();
  const [shown, setShown] = useState(false);
  const allowComment = props.newComment.user._id === userId;

  const confirmAlert = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this comment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a72626',
      cancelButtonColor: '#242424',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if(result.isConfirmed) {
        props.deleteComment(props.itinerary_id, props.newComment._id, token);
        toast.success("Your comment has been deleted", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    })
  }

  useEffect(() => {
    setShown(false)
  },[props.render])

  const commentShowed = 
    <div className="comment-container">
      {!shown 
        ? 
          <p className="comment-text">{props.newComment.comment}</p> 
        :
          <div className="box">
            <input type="text" defaultValue={props.newComment.comment} ref={inputHandler} className="input-edit" />
            <i className="fas fa-paper-plane send" onClick={() => props.editNewComment(props.newComment._id, inputHandler.current.value, token)}></i>
            <i className="fas fa-trash-alt delete" onClick={confirmAlert}></i>
          </div>  
      }
      <i className="fas fa-edit edit" onClick={() => setShown(!shown)}></i>
    </div>

  const commentRendered = allowComment ? commentShowed : <p className="comment-text">{props.newComment.comment}</p>  

  return (
    <div className="commentData">
      <div className="user-photo" style={{backgroundImage: `url('${props.newComment.user.photoUrl}')`}}></div>
      <div className="comment-container">
        <div className="user-name">
          <p>{props.newComment.user.firstName} {props.newComment.user.lastName}</p>
        </div>
        {commentRendered}
      </div>
    </div>
  )
}

export default Comment
