var obj={
	username: "anuj",
	password: "exhorter"
}

var database=[
	{
	username: "anuj",
	password: "exhorter"
	},

	{
	username: "divya",
	password: "exhorter1"
	},

	{
	username: "sakshi",
	password: "exhorter2"
	}
];

var newsfeed=[
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},

	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},

	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password?");

signIn(userNamePrompt,passwordPrompt);

function isUserValid(username,password)
{
	for(var i=0;i<database.length;i++)
	{
		if(username===database[i].username&&
		password===database[i].password)
		{
			return true;
		}
	
	}

	return false;
}

function signIn(username,password){

	if(isUserValid(username,password))
	{
		console.log(newsfeed);
	}	
	else
	{
		alert("sorrry,wrong username or password!");
	}
}

