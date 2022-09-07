import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const EditPost = ({ id }) => {
	const [Edit, setEdit] = useState('');

	function patch() {
		const patchFormat = {
			title: Edit,
		};

		if (Edit.length > 0) {
			axios
				.patch(`http://localhost:3000/posts/${id}`, patchFormat)
				.then(() => alert('Post Edited'));
		} else {
			alert('Please enter the post to edit');
		}
		setEdit('');
	}

	const setEditHandler = e => {
		setEdit(e.target.value);
	};

	return (
		<>
			<input
				type="text"
				value={Edit}
				placeholder="Edit Post"
				onChange={setEditHandler}
			/>
			<Button
				variant="contained"
				color="primary"
				id="edit-button"
				onClick={patch}
			>
				Edit Post
			</Button>
		</>
	);
};

export default EditPost;
