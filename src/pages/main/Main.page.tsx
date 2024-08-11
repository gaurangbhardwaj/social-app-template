import { FunctionComponent, useState } from "react";
import CreatePostComponent from "../../components/create-post/CreatePost.component";
import PostItem from "../../components/post-list/PostList.component";
import ModalComponent from "../../components/modal/Modal.component";

import hiImg from "../../assets/images/hi.png";
import sadFaceImg from "../../assets/images/sad-face.png";
import UserAlphaImg from "../../assets/images/user-alpha.svg";
import UserBetaImg from "../../assets/images/user-beta.svg";

import "./Main.style.scss";

const MainPage: FunctionComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const posts = [
    {
      user: "Theresa Webb",
      time: "5",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 24,
      userImage: UserAlphaImg,
      reaction: hiImg,
      edited: false,
    },
    {
      user: "Marvin McKinney",
      time: "8",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 12,
      userImage: UserBetaImg,
      reaction: sadFaceImg,
      edited: true,
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-2">Hello Jane</h1>
      <p className="sub-heading">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>

      <CreatePostComponent clicked={() => setShowPopup(true)} />
      {posts.map((post) => (
        <PostItem
          key={post.user}
          user={post.user}
          time={post.time}
          content={post.content}
          commentsCount={post.commentsCount}
          userImage={post.userImage}
          reaction={post.reaction}
          edited={post.edited}
        />
      ))}
      <ModalComponent
        show={showPopup}
        onHide={() => setShowPopup(false)}
        formType="register"
      />
    </div>
  );
};
export default MainPage;
