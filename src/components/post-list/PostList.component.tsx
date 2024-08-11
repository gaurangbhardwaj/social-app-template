import { FunctionComponent, memo } from "react";
import menuIcon from "../../assets/images/menu-icon.svg";
import commentIcon from "../../assets/images/comment-icon.svg";

import "./PostList.style.scss";

interface PostItemProps {
  user: string;
  time: string;
  content: string;
  commentsCount: number;
  userImage: string;
  reaction: string;
  edited?: boolean;
}

const PostItem: FunctionComponent<PostItemProps> = ({
  user,
  time,
  content,
  commentsCount,
  userImage,
  edited,
  reaction,
}) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-image-name-container">
          <img
            src={userImage}
            alt={`${user}'s profile`}
            className="user-image"
          />
          <div>
            <h5 className="user-name">{user}</h5>
            <span>
              <span className="post-time">{`${time} mins ago`}</span>
              {edited && (
                <span className="post-time" style={{ marginLeft: "5px" }}>
                  <span>&#x2022; Edited</span>
                </span>
              )}
            </span>
          </div>
        </div>
        <img src={menuIcon} alt="menu-icon" />
      </div>
      <div className="post-content mb-3">
        <div className="content-icon-container">
          <div>
            <div className="react-icon-container">
              <img src={reaction} alt="react" className="react-icon" />
            </div>
          </div>
          <p>{content}</p>
        </div>
      </div>
      <div className="post-footer">
        <img
          src={commentIcon}
          alt="comment-icon"
          style={{ marginRight: "10px" }}
        />
        <span style={{ marginBottom: "0" }}>{commentsCount} comments</span>
      </div>
    </div>
  );
};
export default memo(PostItem);
