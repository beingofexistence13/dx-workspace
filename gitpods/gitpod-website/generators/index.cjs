const blogPostGenerator = require('./blog-post.cjs');

module.exports = (plop) => {
	plop.setGenerator('blog-post', blogPostGenerator(plop));
};
