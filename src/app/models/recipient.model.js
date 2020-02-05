import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.VIRTUAL,
                complement: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.State, { foreignKey: 'state_id', as: 'state' });
        this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
    }
}

export default Recipient;
