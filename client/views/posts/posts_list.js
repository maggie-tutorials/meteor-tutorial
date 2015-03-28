var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

var somethingElse = [
	{
		title: 'Maggie goes to Hollywood',
		author: 'Maggie',
		url: 'http://coderita.herokuapp.com'
	},
	{
		title: 'Dog training for dummies',
		author: 'Doggie',
		url: 'http://google.com'
	},
	{
		title: 'Something that would be really interesting',
		author: 'Sam Interesting',
		url: 'http://coderita.herokuapp.com'
	},
]
Template.postsList.helpers({
	posts: somethingElse
});