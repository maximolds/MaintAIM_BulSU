module.exports = (sequelize, DataTypes) => {

    const ULCheckList = sequelize.define("ULCheckList", {
        ul_crane_inspected_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ul_crane_approved_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ul_crane_no: {
            type: DataTypes.INTEGER, 
            allowNull: true
        },
        ul_crane_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        ul_crane_time_start: {
            type: DataTypes.TIME,
            allowNull: true
        },
        ul_crane_time_end: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Crane_Drive_Unit_Before_Crane_motor_Result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_Before_Crane_motor_Actions:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_Before_Crane_motor_Remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_cracks_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_cracks_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_cracks_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_leaking_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_leaking_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_leaking_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_level_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_level_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_reducer_level_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_break_gap_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_break_gap_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_break_gap_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_guide_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_guide_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_guide_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_encoder_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_encoder_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_encoder_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_diameter_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_diameter_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_diameter_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_before_crane_wheels_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_crane_motor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_crane_motor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_crane_motor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_speed_reducer_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_speed_reducer_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_speed_reducer_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_guide_Roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_guide_Roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_during_guide_Roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_crane_motor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_crane_motor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_crane_motor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_speed_reducer_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_speed_reducer_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_speed_reducer_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Drive_Unit_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Crane_Drive_Unit_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_motor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_motor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_motor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_cracks_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_cracks_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_cracks_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_leaking_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_leaking_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_leaking_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_break_gap_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_break_gap_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_break_gap_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_installation_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_installation_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_installation_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_lubrication_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_lubrication_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_lubrication_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_extra_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wire_rope_extra_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Carriage_Drive_Unit_before_wire_rope_extra_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wiring_drum_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wiring_drum_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_wiring_drum_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_encoder_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_encoder_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_before_carriage_encoder_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_motor_drum_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_motor_drum_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_motor_drum_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wiring_drum_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wiring_drum_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wiring_drum_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wire_rope_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wire_rope_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_during_wire_rope_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_carriage_motor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_carriage_motor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_carriage_motor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Drive_Unit_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_Carriage_frame_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_Carriage_frame_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_Carriage_frame_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_rope_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Hoisting_Carriage_before_wire_rope_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_rope_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_rope_lubrication_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_rope_lubrication_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_rope_lubrication_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_guide_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_guide_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_guide_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_face_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_face_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_face_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_displacement_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_displacement_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_displacement_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_count_plate_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_count_plate_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_count_plate_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_dec_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_dec_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_dec_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_Emg_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_Emg_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_dog_on_Emg_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_positioning_sensor_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_positioning_sensor_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Hoisting_Carriage_before_positioning_sensor_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_positioning_sensor_lamp_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_positioning_sensor_lamp_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_positioning_sensor_lamp_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_load_detector_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_load_detector_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_load_detector_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_looseness_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_looseness_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_looseness_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_function_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_function_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_emergency_function_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_limit_switch_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_limit_switch_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_limit_switch_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_clip_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_clip_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_before_wire_clip_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_guide_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_guide_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_guide_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_displacement_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_displacement_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_during_displacement_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Hoisting_Carriage_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Slide_Fork_before_fork_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_load_detector_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_load_detector_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_load_detector_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_slack_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_slack_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_slack_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_lubrication_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_lubrication_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_lubrication_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_elongation_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_elongation_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_drive_chain_elongation_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_lubrication_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_lubrication_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_lubrication_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_rotates_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_cam_follower_rotates_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Slide_Fork_before_cam_follower_rotates_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_looseness_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_looseness_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_looseness_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_function_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_function_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_limit_sw_function_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_sprocket_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_sprocket_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_sprocket_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_motor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_motor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_motor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_break_gap_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_break_gap_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_break_gap_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_set_value_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_set_value_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_torque_set_value_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_extract_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_extract_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_before_fork_extract_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_fork_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_fork_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Slide_Fork_during_fork_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_sprocket_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_sprocket_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_sprocket_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_load_detector_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_load_detector_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_during_load_detector_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Slide_Fork_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_guide_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_guide_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_guide_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_upper_sheave_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_upper_sheave_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_upper_sheave_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_feed_rail_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_feed_rail_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_feed_rail_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_collector_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_collector_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_collector_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Frames_before_upper_frame_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_upper_frame_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_upper_frame_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_lower_frame_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_lower_frame_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_before_lower_frame_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_during_upper_guide_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_during_upper_guide_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_during_upper_guide_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Frames_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Bottom_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Bottom_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Bottom_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Top_roller_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Top_roller_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_Top_roller_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_count_plate_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_count_plate_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_count_plate_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_dog_emg_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_dog_emg_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_before_dog_emg_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_bottom_rail_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_bottom_rail_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_bottom_rail_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Rails_and_Countplate_during_top_rail_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_top_rail_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_top_rail_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_count_plate_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_count_plate_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_during_count_plate_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Rails_and_Countplate_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Crane_sensor_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Crane_sensor_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Crane_sensor_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_LW_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_LW_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_LW_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Optical_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Optical_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_before_Optical_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Sensors_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_cleaning_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_cleaning_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_cleaning_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_lamp_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Panels_and_Ladder_before_operational_lamp_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_lamp_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_keys_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_keys_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_operational_keys_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_cleaning_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_cleaning_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_cleaning_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_wiring_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_wiring_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_control_wiring_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_plug_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_plug_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_plug_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_fence_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_fence_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_before_safety_fence_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_after_screws_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_after_screws_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Panels_and_Ladder_after_screws_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_wiring_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_wiring_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_wiring_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_bolts_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_bolts_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_bolts_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Inverter_Unit_Before_Inverter_sound_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_sound_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_sound_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_cleaning_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_cleaning_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_cleaning_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damage_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damage_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damage_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_function_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_function_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_function_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_detectors_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_detectors_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_detectors_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_profile_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_profile_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_load_profile_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_loaded_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_loaded_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_loaded_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_chain_loose_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_chain_loose_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_chain_loose_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_end_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_end_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_end_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_centering_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_centering_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Carriage_Fork_during_fork_centering_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_home_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_home_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_home_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_front_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_front_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_front_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_rear_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_rear_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_regular_rear_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Forward_decel1_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Forward_decel1_action:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Forward_decel1_remarks:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Backward_decel1_result:{
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Crane_Travelling_Detectors_during_Backward_decel1_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Backward_decel1_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_decel2_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_decel2_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_decel2_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_end_limit_emergency_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_end_limit_emergency_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_end_limit_emergency_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_upper_level_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_upper_level_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_upper_level_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_lower_level_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_lower_level_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_lower_level_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_fork_level_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_fork_level_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_fork_level_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_upper_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_upper_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_upper_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_lower_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_lower_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_station_lower_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Upward_decel1_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Upward_decel1_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Upward_decel1_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Downward_decel1_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        
        Crane_Travelling_Detectors_during_Downward_decel1_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_Downward_decel1_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_End_limit_result: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_End_limit_action: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        Crane_Travelling_Detectors_during_End_limit_remarks: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        UL_crane_INSPECTION_SUMMARY_RECOMMENDATION:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        UL_crane_Verified_by_MNC:{
            type: DataTypes.STRING,
            allowNull: true,
        },



    });

    return ULCheckList;
}