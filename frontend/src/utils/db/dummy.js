export const POSTS = [
	{
		_id: "1",
		text: "Let's build a fullstack WhatsApp clone with NEXT.JS 14 😍",
		img: "/posts/post1.png",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy1.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "janedoe",
					profileImg: "/avatars/boy1.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "How you guys doing? 😊",
		user: {
			username: "johndoe",
			profileImg: "/avatars/boy2.png",
			fullName: "John Doe",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "janedoe",
					profileImg: "/avatars/boy2.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
];
	
export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "John Doe",
		username: "johndoe",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "Jane Doe",
		username: "janedoe",
		profileImg: "/avatars/boy1.png",
	},
	
];