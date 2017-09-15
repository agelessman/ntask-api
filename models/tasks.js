/**
 * Created by M.C on 2017/9/15.
 */
module.exports = (sequelize, DataType) => {
    "use strict";
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };
    return Tasks;
};

