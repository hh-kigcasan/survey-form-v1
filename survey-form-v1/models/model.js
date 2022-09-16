const connection    = require('../config/database.js');

/*
	Docu: Model Class
		- req (http request object) - store all the query logs if the request object is passed
		- force_log (true / false) - set to true to force the logging feature (Even for queries run in executeQuery(...))
	used by: almost all models
*/
class Model {
	constructor(req = undefined, force_log = false){
		this.req = req;
		this.force_log = force_log;
	}

	/*
		DOCU: Executes the given query
			- query: formatted query to be executed (make sure to use mysql.format(`SELECT * FROM heroes WHERE id = ?`, [hero_id]);)
		returns a promise object
		used by: almost all models
	*/

	executeQuery(query) {
		return new Promise((resolve, reject) => {
			connection.query(query, function (err, result) {
				if(err) {
					reject(err);
				}else{
		        	resolve(result);
		        }
		    });
		});		
	}
}

module.exports = Model;
