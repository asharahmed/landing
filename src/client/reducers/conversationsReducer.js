const reducer = (state={
        conversations: [{
			active: true,
			firstName: "Ashar",
			lastName: "Ahmed",
			profilePic: {
				url: "https://pbs.twimg.com/profile_images/912500537500815362/ZSxLvTCw_400x400.jpg"
			},
			lastMessage: { 
				body: "hey",
				time: 1524717615
			}
		},
		{
			active: false,
			firstName: "Justin",
			lastName: "O' Boyle",
			profilePic: {
				url: "https://avatars2.githubusercontent.com/u/7422635?s=400&v=4"
			},
			lastMessage: { 
				body: "lol",
				time: 1524713615
			}
		}],
        fetching: false,
        fetched: false,
        error: null,
    }, action) => {
    return {...state}
}

export default reducer