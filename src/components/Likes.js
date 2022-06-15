import React, { useState } from "react";
function Likes({likes,disLikes}){
    const [likesCount, setLikeCount] = useState(likes)
    const [disLikeCount, setDislikeCount] = useState(disLikes)
    function upvotes(){

        setLikeCount((likes) => likes + 1)
    }
    function downvotes(){
        setDislikeCount((disLikeCount) => disLikeCount +1)
    }
    return <div>
    <button onClick={upvotes}>{likesCount} 👍 </button>
    <button onClick={downvotes}>{disLikeCount}👎</button>

    </div>
}
export default Likes;