

const Input = ( {content, setContent, addContent}) => {

    return ( 
        <div className="input">
            <img src="./images/avatars/image-juliusomo.png" alt="" />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="30" 
            rows="3" 
            placeholder="Add a comment..."
            ></textarea>
            <button onClick={() => addContent()}>Send</button>
        </div>
    );
}
    
export default Input;
