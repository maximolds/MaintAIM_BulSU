module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        picture:{
            type:DataTypes.STRING,
            allowNull:true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Users;
}