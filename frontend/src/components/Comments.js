import React, {useRef, useState} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import Comment from './Comment'
import itinerariesActions from '../redux/actions/itinerariesActions'
import '../styles/Comments.css'


const Comments = (props) => {
  
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.token)

  const [renderComments, setRenderComments] = useState(false)
  const [allComments, setAllComments] = useState(props.itineraryComments)

  const inputHandler = useRef();

  const sendComment = () => {
    let commentValue = inputHandler.current.value;
    if(commentValue !== ''){
      dispatch(itinerariesActions.addComment(props.itineraryId, commentValue, token))
        .then((res) => {
          if(token){
            setAllComments(res)
            inputHandler.current.value = ''
          }else{
            toast.error("Ups! You must be signed in to post a comment", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        }).catch(err => console.log(err))
    }else{
      toast.warning("Ups! You can't post an empty comment", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      sendComment()
    }
  }

  const deleteComment = (itineraryId, commentId, token) => {
    dispatch(itinerariesActions.deleteComment(itineraryId, commentId, token))
      .then(res => {
        if(res.success) {
          setAllComments(allComments.filter(comment => comment._id !== commentId))
        }else{
          throw new Error('Problem deleting comment')
        }
      }).catch(err => console.log(err));
  }

  const editComment = (commentId, comment, token) => {
    dispatch(itinerariesActions.editComment(commentId, comment, token))
      .then(res => {
        if(res.success){
          allComments.forEach(editedComment => {
            if(editedComment._id === commentId){
              editedComment.comment = comment
            }
          })
          setAllComments(allComments)
          setRenderComments(!renderComments)
        }
      }).catch(error => console.log(error))
  }

  return (
    <div className="comments-section">
      <h4 className="comments-title">Comments</h4>
      <div className="display-comments">
        {allComments.map(comment => {
          return <Comment key={comment._id} newComment={comment} deleteComment={deleteComment} itinerary_id={props.itineraryId} editNewComment={editComment} render={renderComments} />
        })}
      </div>
      <div className="input-comment-container">
        <input type="text" ref={inputHandler} className="input-comment" onKeyPress={handleEnter} placeholder={!token ? "You must be signed in to post a comment": ""} />
        <i className="fas fa-paper-plane send" onClick={sendComment} style={{cursor: "pointer"}}></i>
      </div>
    </div>
  )
}

export default Comments
