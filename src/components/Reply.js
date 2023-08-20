const Reply = () => {

    const [isReplying, setIsReplying] = useState(false);
    const [replyContent, setReplyContent] = useState('');

    const startReplying = () => {
        setIsReplying(true);
    }

    const stopReplying = () => {
        setIsReplying(false);
    }

    const handleReply = () => {
        onAddReply(id, replyContent);
        setReplyContent('');
        stopReplying();
    }
    
    return ( 
        <div className="reply">
            {isReplying && (
                <div className="reply-box">
                    <textarea value={replyContent} onChange={e => setReplyContent(e.target.value)} placeholder="Write your reply..."></textarea>
                    <button onClick={handleReply}>Reply</button>
                    <button onClick={stopReplying}>Cancel</button>
                </div>
            )}
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
                <div></div>
            }
        </div>
    );
}
 
export default Reply;