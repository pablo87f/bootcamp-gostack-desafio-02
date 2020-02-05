import Sequelize from 'sequelize';
import databaseConfig from '../config/database.config';
import User from '../app/models/user.model';
import Recipient from '../app/models/recipient.model';
import State from '../app/models/state.model';
import City from '../app/models/city.model';

const models = [User, Recipient, State, City];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
