import React, {useState} from "react";
function Comment({comments}){
    const [cmtBtn, setCmtBtn] = useState(true)
    const commentList = comments.map((comments)=> (<><h3>{comments.user}</h3> <p>{comments.comment}</p></>))
    function changeButton(){
        setCmtBtn(()=>!cmtBtn)
        
    }
    return <div>
       <br></br>
    <button onClick={changeButton}>{cmtBtn ? "Hide Comments" : "Show Comments"}</button>
    <hr></hr>
    {cmtBtn ? <div>
        <h2>{commentList.length} Comments</h2>
        {commentList} </div>: null}
    
    
    </div>
}
export default Comment;