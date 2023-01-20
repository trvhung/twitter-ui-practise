import Post from './Post';

export default {
	title: 'Components/Post',
	component: Post,
};

const Template = () => (
	<Post
		content="Yo"
		name="Roy Quilor"
		username="royquilor"
		date="10h"
		initials="JD"
		following="10"
		followers="10"
		description="I love CSS for real"
		src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
	>
		Example
	</Post>
);

export const Default = Template.bind({});