var request = require('request');

//console.error('error', code);

class MTA{
	constructor( host, port, username, password ) {
		this.host = host || 'localhost';
		this.port = port || 22005;
		this.username = username;
		this.password = password;
	};
	
	call( resource, func, args ){
		if (!resource || typeof(resource) !== 'string' || resource === '') console.error('ERROR:', 'resource argument is not correct');
		if (!func || typeof(func) !== 'string' || func === '') console.error('ERROR:', 'function argument is not correct');
		args = JSON.stringify(args);
		var options = {
			url: 'http://'+ this.host +':'+ this.port +'/'+ resource +'/call/'+ func,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': args.length
			},
			body: args,
			auth: {
				user: this.username || '',
				pass: this.password || ''
			}
		};
		return new Promise((res, err) => {
			request(options, (err, response, data) => {
				if(err) return err(err)
				return res(data) 
			});
		});
	};
};

exports.MTA = MTA