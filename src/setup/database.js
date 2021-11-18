import Sequelize from 'sequelize';
import Q from 'q';
import config from 'config';

export default () => {
	return new Sequelize(
		config.get('databases.sql').name,
		config.get('databases.sql').user, 
		config.get('databases.sql').password, 
		{
			host: config.get('databases.sql').host,
			dialect: 'mysql',
			port: 17014,
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	);
};
