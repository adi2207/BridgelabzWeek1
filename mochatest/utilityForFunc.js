module.exports =
	{
		helloUser: function (username) {

			if (username.length < 3 || username == null)
				console.log("invalid username");
			else
				console.log("hello " + username + " how are you");

			return username;
		},

		quadRoots: function(a, b, c) {

			var root1, root2;
		
			if (Math.pow(b, 2) == 4 * a * c) {
				root1 = (-b) / (2 * a);
				root2 = (-b) / (2 * a);
			}
			else if (Math.pow(b, 2) > 4 * a * c) {
				var rootD = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
				root1 = ((-b + rootD) / (2 * a));
				root2 = ((-b - rootD) / (2 * a));
			}
			else {
				root1 = undefined;
				root2 = undefined;
			}
		
			var result=[root1, root2];
			return result;
		}
	}