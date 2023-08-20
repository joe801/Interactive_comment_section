import { useEffect, useState } from "react";
import Comment from "./Comment";
import Input from "./Input";

const Comments = ( {dataJson} ) => {
    const [content, setContent] = useState(''); // state variable to grab data from input component
    const currentUser = dataJson.currentUser;   
    const [comments, setComments] = useState([]);
    const [deleteState, setDeleteState] = useState(false);
    //updating value of comment on first render
    useEffect(() =>{
        setComments(dataJson.comments);
    }, [dataJson.comments]);
    // object variable of new comment
    const newComment = {
        id: Math.random() *100,
        content: content,
        createdAt: "Now",
        score: 0,
        user: currentUser,
    } 
    // function to add new comment to previos comments list
    const addContent = () => {
        setComments([...comments, newComment]);
        setContent('');
    }

    //fumction to delete comment
    return ( 
        <div>
            {
                comments?.length > 0
                ?
                    <div>
                        {comments.map((data) => (
                            < div key={data.id}>
                            <Comment score={data.score} username={data.user.username}
                            createdAT={data.createdAt} content={data.content} 
                            image={data.user.image.png}
                            />
                            {data.replies?.length > 0 ? 
                            data.replies.map((reply) => (
                                <div key={reply.id} className="reply">
                                    <Comment score={reply.score} username={reply.user.username}
                                    createdAT={reply.createdAt} content={reply.content} 
                                    image={reply.user.image.png}
                                    />
                                </div>
                            ))
                            : 
                            <div></div>}
                            </div>
                        ))}
                    </div>
                :
                <h2>No Comments found</h2>
            }
            <Input content={content} setContent={setContent} addContent={addContent}/>
        </div>
    );
}
export default Comments;