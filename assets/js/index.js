const Headroom = require('headroom.js');
const githubUsers = require('./github-users');
require('fetch-polyfill');

const createHeader = (header) => {
	let _header = document.querySelector(header);
	return new Headroom(_header).init();
};

const bundleStart = () => {
	createHeader("header");
};

fetch('https://api.github.com/users/luizpanariello')
.then(function(response){
	console.log(response);
});

bundleStart();

