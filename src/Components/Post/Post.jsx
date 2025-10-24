import { useNavigate } from 'react-router-dom';
import './Post.scss';
import { timeAgo } from '../../Util/util';

function Post({ data, isClickable = false }) {
    const navigate = useNavigate();

    return (
        <div
            className="post"
            style={{ cursor: isClickable ? 'pointer' : 'default' }}
            onClick={
                isClickable
                    ? () => {
                          navigate(`/post/${data.id}`);
                      }
                    : undefined
            }
        >
            <div className="postheader">
                <img src="/no-photo.png" />
                <h4>{data.username}</h4>
                <span>{timeAgo(data.createdAt)}</span>
            </div>
            <h2>{data.title}</h2>
            <p className="espaco" />
            <p className="body">{data.posttext}</p>
        </div>
    );
}

export default Post;
