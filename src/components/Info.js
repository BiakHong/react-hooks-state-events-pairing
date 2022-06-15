import React from "react";

function Info({views, uploadDate}){
   return <div>
        <p>{views} views | Uploaded{uploadDate}</p>
       
    </div>
}
export default Info;