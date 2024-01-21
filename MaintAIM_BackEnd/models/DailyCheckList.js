module.exports = (sequelize, DataTypes) => {

    const DailyChekList = sequelize.define("DailyCheckList", {
        Daily_CIL_inspected_by:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        Daily_CIL_approved_by:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Daily_CIL_Crane_Number:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Daily_CIL_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        Crane_Control_Panel_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Control_Panel_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Stationary_Operation_Tower_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Stationary_Operation_Tower_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Remote_Controller_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Remote_Controller_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Guard_fence_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,        
        },
        Crane_Guard_fence_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Travel_Mechanisms_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Travel_Mechanisms_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Hoisting_Mechanisms_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Hoisting_Mechanisms_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Fork_Mechanisms_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Fork_Mechanisms_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Wire_Rope_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Wire_Rope_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Optical_Transmitter_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Optical_Transmitter_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Load_profile_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Load_profile_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Upper_rail_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Upper_rail_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Lower_rail_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Lower_rail_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Lower_rail_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Lower_rail_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Rack_aisle_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Rack_aisle_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Rack_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Crane_Rack_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Frame_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Frame_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Chain_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Chain_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Motors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Motors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Limit_Switches_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Limit_Switches_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Photo_Sensors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Photo_Sensors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Terminal_Box_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Terminal_Box_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Cable_Tray_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Cable_Tray_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Wiring_and_Cable_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Wiring_and_Cable_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Floor_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F1_Conveyor_Floor_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Frame_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Frame_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Chain_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Chain_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Motors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Motors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Limit_Switches_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Limit_Switches_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Photo_Sensors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Photo_Sensors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Terminal_Box_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Terminal_Box_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Cable_Tray_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Cable_Tray_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Wiring_and_Cable_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Wiring_and_Cable_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Floor_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        F2_Conveyor_Floor_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Frame_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Frame_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Chain_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Chain_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Motors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Motors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Limit_Switches_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Limit_Switches_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Photo_Sensors_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Photo_Sensors_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Terminal_Box_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Terminal_Box_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Cable_Tray_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Cable_Tray_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Wiring_and_Cable_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Wiring_and_Cable_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Floor_Result:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Anti_Home_Conveyor_Floor_Action:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        Daily_CIL_Verified_by_MNC:{
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        DAILY_CIL_REMARKS:{
            type: DataTypes.TEXT,
            allowNull: false,
        },

    });

    return DailyChekList;
}