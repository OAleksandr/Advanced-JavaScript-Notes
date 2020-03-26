import { getTopArticles, getArticle } from './api.js';

getTopArticles().then((topArticles)=>{
	console.log("top article ids");
	console.log(topArticles);
});

getArticle('8863').then((articleData) => {
	console.log("sample article");
	console.log(articleData);	
});


