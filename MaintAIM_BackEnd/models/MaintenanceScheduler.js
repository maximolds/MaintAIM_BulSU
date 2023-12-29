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
            type: DataTypes.DATE,
            allowNull: false,
        },
        EndTime:{
            type: DataTypes.DATE,
            allowNull: false,
        }
       
    });

    return MaintenanceScheduler;
}