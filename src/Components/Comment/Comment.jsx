import { timeAgo } from "../../Util/util";
import './Comment.scss';

function Comment({ data }) {
    return (
        <div className="comment">
            <img src="/no-photo.png" />
            <div className="commentContainer">
                <div className="commentHeader">
                    <h4>Usuário Anônimo</h4>
                    <span>{timeAgo(data.createdAt)}</span>
                </div>
                <p>{data.commentBody}</p>
            </div>
        </div>
    );
}

export default Comment;
