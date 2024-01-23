module.exports = (sequelize, DataTypes) => {

    const MaintenanceHistory = sequelize.define("MaintenanceHistory", {
        personnel_incharge:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        crane_number:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        part_replaced:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_replaced:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        previous_date_replaced:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return MaintenanceHistory;
}