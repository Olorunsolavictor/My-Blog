import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const DeletePost = ({ id }) => {
	function deletePost() {
		if (window.confirm('Are you sure?')) {
			axios
				.delete(`http://localhost:3000/posts/${id}`)
				.then(() => alert('Post Deleted'));
		} else {
			alert('Cancelled');
		}
	}

	return (
		<>
			<Button variant="contained" color="secondary" onClick={deletePost}>
				Delete Post
			</Button>
		</>
	);
};

export default DeletePost;
