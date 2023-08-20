import { useState } from "react";
import Modal from "./Modal";

const Comment = ( {score, username, createdAT, content, image } ) => {
    //const [isUser. setIsUser] = useState(false);
    const [deleteState, setDeleteState] = useState(false);

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
        if (voteScore > score - 1) {
            setVoteScore((prev) => prev - 1);
        }
    }

    const deleteComment = () => {
        setDeleteState(true);
    }

    /*const checkUser = () => {
        if (username === ) {
            
        }
    } */
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
                            <img src="/images/icon-delete.svg" alt="delete icon" />
                            <p className="delete" onClick={deleteComment}>Delete</p>

                            <img src="/images/icon-edit.svg" alt="edit icon" />
                            <p>Edit</p>
                        </>
                        : 
                        <>
                        <img src="/images/icon-reply.svg" alt="reply" />
                        <p>Reply</p>
                        </>
                        }
                    </div>
                </div>
                <div className="message">
                    {content}
                </div>
            </div>
        </div>
        {deleteState && <Modal setDeleteState={setDeleteState}/>}
        </>
     );
}
 
export default Comment;