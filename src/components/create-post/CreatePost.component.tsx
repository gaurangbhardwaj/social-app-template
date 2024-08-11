import { FunctionComponent, memo } from "react";
import commentWhite from "../../assets/images/comment-white.png";

import "./CreatePost.style.scss";

interface CreatePostComponentProps {
  clicked: () => void;
}

const CreatePostComponent: FunctionComponent<CreatePostComponentProps> = ({
  clicked,
}) => {
  return (
    <div className="create-post-container">
      <h3 className="create-post-title">Create post</h3>
      <div className="input-group mb-3">
        <div className="input-icon-container d-flex flex-row align-items-center">
          <div>
            <div className="comment-icon-container">
              <img
                src={commentWhite}
                alt="Comment"
                className="comment-icon-white"
              />
            </div>
          </div>
          <textarea placeholder="How are you feeling today?" />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => clicked()}
      >
        Post
      </button>
    </div>
  );
};
export default memo(CreatePostComponent);
