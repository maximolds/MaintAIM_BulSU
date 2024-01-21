module.exports = (sequelize, DataTypes) => {

    const UHCheckList = sequelize.define("UHCheckList", {
        UH_crane_inspected_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UH_crane_approved_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UH_crane_no: {
            type: DataTypes.INTEGER, 
            allowNull: true
        },
        UH_crane_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        UH_crane_time_start: {
            type: DataTypes.TIME,
            allowNull: true
        },
        UH_crane_time_end: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Hoisting_Drive_Motor_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Motor_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Motor_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Motor_Temperature_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Motor_Temperature_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Motor_Temperature_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_gap_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_gap_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_gap_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_E_magnetic_brake_wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_leakage_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_leakage_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_leakage_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_Grease_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_Grease_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Cyclo_gear_Grease_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Lubrication_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Lubrication_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Lubrication_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_wire_ropes_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Traction_sheaves_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Traction_sheaves_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_Traction_sheaves_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_home_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_home_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_home_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Slowdown_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Slowdown_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Slowdown_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Over_run_limit_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Over_run_limit_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_sensing_plate_Over_run_limit_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Lower_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Lower_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Lower_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Upper_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Upper_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_stop_position_Upper_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Clearance_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Clearance_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Clearance_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Drive_guide_rollers_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_Temperature_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_Temperature_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Motor_Temperature_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_gap_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_gap_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_gap_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_E_magnetic_brake_wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_leakage_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_leakage_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_leakage_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_Grease_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_Grease_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Cyclo_gear_Grease_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Front_wheel_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Rear_wheel_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_top_guide_rollers_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_top_guide_rollers_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_top_guide_rollers_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bottom_guide_rollers_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bottom_guide_rollers_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bottom_guide_rollers_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_home_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_home_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_home_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Slowdown_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Slowdown_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Slowdown_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Over_run_limit_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Over_run_limit_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_sensing_plate_Over_run_limit_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_stop_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_stop_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_stop_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_measurement_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_measurement_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_centering_measurement_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Rail_joint_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Rail_joint_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Rail_joint_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Shim_plate_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Shim_plate_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Bay_Bottom_rail_Shim_plate_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_Temperature_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_Temperature_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Motor_Temperature_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_gap_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_gap_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_gap_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_E_magnetic_brake_wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_greases_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_greases_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_greases_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_Grease_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_Grease_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Cyclo_gear_Grease_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Lubrication_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Lubrication_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Lubrication_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Backlash_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Backlash_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_pinion_Backlash_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Locknut_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Locknut_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Locknut_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Mechanic_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Mechanic_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Torque_limiter_Mechanic_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Lubrication_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Lubrication_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Lubrication_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Deformation_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Deformation_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Deformation_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Rack_gear_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_sound_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Sprocket_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_centering_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_centering_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_centering_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_stroke_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_stroke_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Stopping_sensing_Fork_stroke_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Grove_wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Grove_wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Grove_wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Lubrication_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Lubrication_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Middle_rail_Lubrication_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Lubrication_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Lubrication_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_body_Cam_followers_Lubrication_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Fasteners_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Fasteners_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Fasteners_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Wear_tear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Wear_tear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Wear_tear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Dust_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Trolley_Unit_Collector_arm_Dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_magnetic_contactors_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_magnetic_contactors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_magnetic_contactors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_Snapped_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_Snapped_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_Snapped_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_connection_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_connection_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Electric_wiring_connection_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Transformer_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Transformer_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Transformer_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_PC_Board_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_PC_Board_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_PC_Board_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_panel_buttons_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_panel_buttons_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_panel_buttons_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Indicator_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Indicator_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Indicator_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_stop_button_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_stop_button_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_E_stop_button_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Ventilation_fan_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Ventilation_fan_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Ventilation_fan_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_4bit_sensor_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_4bit_sensor_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_4bit_sensor_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_Alignment_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_Alignment_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_Alignment_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_LED_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Control_Panel_Optical_transmitter_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Pre_occupied_load_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Pre_occupied_load_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Pre_occupied_load_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_profile_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_profile_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_profile_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_High_load_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_High_load_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_High_load_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_loaded_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_loaded_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_loaded_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Carriage_chain_loose_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Carriage_chain_loose_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Carriage_chain_loose_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_overhanged_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_overhanged_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_overhanged_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_projection_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_projection_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Load_projection_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_end_detectors_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_end_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_end_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_centering_detectors_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_centering_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Detectors_Fork_centering_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Home_position_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Home_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Home_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_front_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_front_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_front_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_rear_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_rear_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Regular_position_rear_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Forward_decel1_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Forward_decel1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Forward_decel1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Backward_decel1_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Backward_decel1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Backward_decel1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Dec_1_2_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Dec_1_2_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_Dec_1_2_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_End_limit_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_End_limit_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Crane_travelling_End_limit_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Upper_level_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Upper_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Upper_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Lower_level_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Lower_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Lower_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Fork_level_zone_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Fork_level_zonel_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Fork_level_zone_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_upper_level_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_upper_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_upper_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_lower_level_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_lower_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_lower_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Upward_decel1_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Upward_decel1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Upward_decel1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Downward_decel1_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Downward_decel1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Station_Downward_decel1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Decel2_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Decel2_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_Decel2_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_End_limit_result:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_End_limit_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_hoisting_End_limit_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        UH_Crane_INSPECTION_SUMMARY:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        UH_Crane_Verified_by_MNC:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        





    });

    return UHCheckList;
}