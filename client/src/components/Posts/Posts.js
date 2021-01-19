import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';

import styles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = () => {
	const posts = useSelector((state) => state.posts);
	const classes = styles();

	console.log(posts);
	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
