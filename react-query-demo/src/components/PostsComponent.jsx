import { useQuery } from 'react-query';

const fetchPosts = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

function PostsComponent() {
	const { data, error, isLoading, isError } = useQuery('post', fetchPosts, {
		cacheTime: 1000 * 60 * 10,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div> Error: {error.message}</div>;
	}

	return (
		<div>
			<h1>Posts</h1>
			<button onClick={fetchPosts}>Refetch Posts</button>
			<ul>
				{data.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export default PostsComponent;
