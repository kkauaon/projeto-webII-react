import { timeAgo } from "../../Util/util";
import './Comment.scss';

function Comment({ data }) {
    return (
        <div className="comment">
            <img src={`https://picsum.photos/seed/${data.UserId}/64/64/`} />
            <div className="commentContainer">
                <div className="commentHeader">
                    <h4>{data.User?.username}</h4>
                    <span>{timeAgo(data.createdAt)}</span>
                </div>
                <p>{data.commentBody}</p>
            </div>
        </div>
    );
}

export default Comment;
