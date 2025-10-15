import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function Post() {
    let { id } = useParams();

    return <div>{id}</div>;
}

export default Post;
