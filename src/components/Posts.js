import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import '../App.css';
import { Button } from '@mui/material';

const Posts = () => {
	const [post, setPost] = useState('');

	function makePosts() {
		const postFormat = {
			id: uuid(),
			title: post,
			author: 'typicode',
		};

		if (post.length > 0) {
			axios
				.post('http://localhost:3000/posts', postFormat)
				.then(() => alert('Post Made'));
		} else {
			alert('Please make a post');
		}
		setPost('');
	}

	function handleSetPost(e) {
		setPost(e.target.value);
	}

	return (
		<div>
			<h1>Victor's Mini Blog</h1>
			<input
				type="text"
				value={post}
				placeholder="New Post"
				id="input"
				onChange={handleSetPost}
			/>
			<Button
				variant="contained"
				color="primary"
				id="post-button"
				onClick={makePosts}
			>
				Post
			</Button>
		</div>
	);
};

export default Posts;
