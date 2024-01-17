module.exports = (sequelize, DataTypes) => {

    const MaintenanceScheduler = sequelize.define("MaintenanceScheduler", {
        Subject:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        StartTime:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        EndTime:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CategoryColor:{
            type: DataTypes.STRING,
            allowNull: false,
        }
       
    });

    return MaintenanceScheduler;
}