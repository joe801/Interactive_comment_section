import { useState } from "react";
import Modal from "./Modal";

const Comment = ( {score, username, createdAT, content, image, onDelete, onEdit } ) => {
    //const [isUser. setIsUser] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    const deleteComment = () => {
        setDeleteState(true);
    }
    // variables to control comment voting
    const [voteScore, setVoteScore] = useState(score);
    // function to increase vote by one
    const addVote = () => {
        if (voteScore < score + 1) {
            setVoteScore((prev) => prev + 1);
        }
    }

    // function to decrease volt by one
    const downVote = () => {
        if (voteScore > score - 1 && score!== 0) {
            setVoteScore((prev) => prev - 1);
        }
    }

    // setting up editing functionality
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content);
    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }
    const handleEdit = () => {
        onEdit(editContent); // Send the updated content to the parent
        stopEditing();
    }

    return (
        <>
        <div className="comment">
            <div className="voteContain">
                <button onClick={addVote}>+</button>
                <p>{voteScore}</p>
                <button onClick={downVote}>-</button>
            </div>
            <div className="content">
                <div className="top">
                    <div className="topleft">
                        <img src={image} alt={username + 'image'}/>
                        <p className="username">{username}</p>
                        <p>{createdAT}</p>
                    </div>
                    <div className="topright">
                        { username === "juliusomo" ? 
                        <>
                            <div className="deleteContain" onClick={deleteComment}>
                                <img src="/images/icon-delete.svg" alt="delete icon" />
                                <p className="delete">Delete</p>
                            </div>

                            <img src="/images/icon-edit.svg" alt="edit icon" />
                            <p onClick={() => startEditing()}>Edit</p>
                        </>
                        : 
                        <>
                        <img src="/images/icon-reply.svg" alt="reply" />
                        <p>Reply</p>
                        </>
                        }
                    </div>
                </div>
                {isEditing ? 
                <div className="editMessage">
                    <textarea 
                        cols="30" 
                        rows="3"
                        value={editContent} 
                        onChange={e => setEditContent(e.target.value)}
                    >
                    </textarea>
                    <div>
                        <button onClick={handleEdit}>UPDATE</button>
                    </div>
                </div> : 
                <div className="message">
                    {content}
                </div>
                }
            </div>
        </div>
        {deleteState && <Modal setDeleteState={setDeleteState} onDelete={onDelete}/>}
        </>
     );
}
 
export default Comment;