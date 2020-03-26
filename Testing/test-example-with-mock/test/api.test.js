import chai from 'chai';
import fetchMock from 'fetch-mock';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

import { getTopArticles, getArticle } from '../js/api.js';


describe("External APIs testing", function() {
	const SAMPLE_ID = '8863';
	const ARTICLE_URL = `https://hacker-news.firebaseio.com/v0/item/${SAMPLE_ID}.json?print=pretty`;
	const ARTICLE_OUTPUT = {
	  "by" : "dan Mouris",
	  "descendants" : 71,
	  "id" : 8863,
	  "kids" : [ 8952, 9224, 8917],
	  "score" : 111,
	  "time" : 1175714200,
	  "title" : "Some different data",
	  "type" : "story",
	  "url" : "http://www.getdropbox.com/u/2/screencast.html"
	}

  const TOP_ARTICLES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  const TOP_ARTICLES_OUTPUT = [9129911, 9129199, 9127761, 22437092]

	before('setup fetchMocks', function () {
	  // setup the mock for article url
    fetchMock.get(ARTICLE_URL, ARTICLE_OUTPUT);
    fetchMock.get(TOP_ARTICLES_URL, TOP_ARTICLES_OUTPUT)
  });

	it("test that getArticle", function() {
		let article = getArticle(SAMPLE_ID);

    // test the url is successful.
    fetchMock.lastUrl().should.equal(ARTICLE_URL);

    return article.should.eventually.deep.equal(ARTICLE_OUTPUT);
	});

  it("test that our getArticle isn't bogus", function() {
    let article = getArticle(SAMPLE_ID);

    // test the url is successful.
    fetchMock.lastUrl().should.equal(ARTICLE_URL);

    return article.should.eventually.deep.not.equal("random result");
  });

  it("test that the getTopArticles", function() {
      // initiate fetch and store promise for testing
      let articles = getTopArticles();

      // test the url is successful.
      fetchMock.lastUrl().should.equal(TOP_ARTICLES_URL);

      // test
      return articles.should.eventually.deep.equal(TOP_ARTICLES_OUTPUT);
  });

  after(function () {
      fetchMock.restore();
  });
});