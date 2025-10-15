import { useNavigate } from "react-router-dom";

function Post(props) {
    const navigate = useNavigate();

    return (
        <div
            className="post"
            onClick={() => {
                navigate(`/post/${props.data.id}`);
            }}
        >
			<div className="postheader">
				<img src={`https://picsum.photos/seed/${props.data.username}/32/32/`} />
				<div className="username">{props.data.username}</div>
			</div>
			<div className="title">{props.data.title}</div>
            <div className="body">{props.data.posttext}</div>
        </div>
    );
};

export default Post;
