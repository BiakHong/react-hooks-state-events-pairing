import video from "../data/video.js";
import Title from "./Title.js";
import Info from "./Info.js";
import Likes from "./Likes.js";
import Comment from "./Comment.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title videoTitle={video.title}s/>
      <Info views={video.views} uploadDate={video.createdAt} />
      <Likes likes={video.upvotes} disLikes={video.downvotes}/>
      <Comment comments={video.comments} />
    </div>
  );
}

export default App;
