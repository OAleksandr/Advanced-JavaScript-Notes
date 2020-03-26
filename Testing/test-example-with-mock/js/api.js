// hackernews 

export const getArticle = (id) => {
	const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
	
	return fetch(URL)
		.then((response)=>{
			return response.json()
		})
		.then((articleData)=>{
			return articleData;
		}).catch((error)=> {
			return {error: error}
		});
}


export const getTopArticles = () => {
	const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

	return fetch(URL)
		.then((response) => {
			return response.json();
		}).then((topAritclesData) => {
			return topAritclesData;
		});
}