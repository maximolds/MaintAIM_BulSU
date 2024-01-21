module.exports = (sequelize, DataTypes) => {

    const Crane14CheckList = sequelize.define("Crane14CheckList", {
        crane14_inspected_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        crane14_approved_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        crane14_no: {
            type: DataTypes.INTEGER, 
            allowNull: true
        },
        crane14_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        crane14_time_start: {
            type: DataTypes.TIME,
            allowNull: true
        },
        crane14_time_end: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Travel_Drive_Before_Travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_leakage_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_leakage_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_leakage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_level_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_level_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Speed_reducer_level_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_wear_tear_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_wear_tear_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_wear_tear_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_E_magnetic_brake_Brake_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Drive_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Drive_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Drive_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Free_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Free_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Free_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Travel_encoder_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_Before_Travel_encoder_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Travel_Drive_Before_Travel_encoder_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Travel_Drive_During_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_E_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_E_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_E_magnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Travel_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Free_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Free_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_During_Free_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Travel_Drive_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Hoist_Drive_Before_Speed_reducer_leakage_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_leakage_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_leakage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_level_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_level_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Speed_reducer_level_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_wear_tear_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_E_magnetic_brake_Brake_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Chain_tension_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Elongation_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Elongation_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_chain_Elongation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Sprocket_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Sprocket_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Sprocket_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Hoist_Drive_Before_Hoisting_encoder_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_encoder_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_Before_Hoisting_encoder_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Hoisting_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Hoisting_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Hoisting_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_E_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_E_magneticmagnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_E_magneticmagnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_sound_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_vibrations_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_vibrations_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_During_Sprocket_vibrations_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Hoisting_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Hoisting_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Hoisting_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoist_Drive_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Carriage_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Carriage_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Carriage_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Hoisting_Carriage_Before_guide_rollers_mast_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_mast_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_mast_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_Diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_Diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_guide_rollers_Diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_Diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_Diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_face_rollers_Diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_Spring_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_Spring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Load_profile_Spring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Bay_count_shielding_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Bay_count_shielding_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Bay_count_shielding_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Home_position_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Home_position_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Home_position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Deceleration_shielding_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Deceleration_shielding_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Deceleration_shielding_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_Position_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_Position_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_Before_Over_run_flag_Position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_guide_rollers_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_guide_rollers_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_guide_rollers_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_face_rollers_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_face_rollers_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_face_rollers_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Hoisting_Carriage_During_Shielding_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_Shielding_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_During_Shielding_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Hoisting_Carriage_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Rail_joint_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Top_rail_Bolts_and_nuts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bottom_rail_Rail_joint_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_Missing_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_Missing_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shim_plates_Missing_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Anchor_bolt_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Anchor_bolt_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Anchor_bolt_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shielding_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shielding_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Shielding_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bay_count_shielding_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bay_count_shielding_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Bay_count_shielding_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Home_position_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Home_position_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Home_position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Deceleration_shielding_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Deceleration_shielding_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Deceleration_shielding_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_Position_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_Position_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_Before_Over_run_flag_Position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Top_rail_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Top_rail_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Top_Bottom_Rails_During_Top_rail_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Bottom_rail_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Bottom_rail_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Bottom_rail_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Shielding_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Shielding_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_During_Shielding_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Top_Bottom_Rails_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lowerr_Frames_Before_Upper_travel_guide_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_travel_guide_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Upper_travel_guide_Diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_deformation_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Sprocket_deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_Before_Lower_travel_guide_Diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Upper_travel_guide_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Upper_travel_guide_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Upper_travel_guide_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Lower_travel_guide_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Lower_travel_guide_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Lower_travel_guide_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_sound_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_vibrations_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_vibrations_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_During_Sprocket_vibrations_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Upper_Lower_Frames_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Upper_Lower_Frames_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Fork_Before_body_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Fork_Before_body_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Fork_Before_body_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Fork_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Fork_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Fork_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Deformation_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_wear_tear_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_E_magnetic_brake_Brake_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Rack_and_pinion_Lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Slide_Fork_Unit_Before_Middle_rail_Groove_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Groove_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Groove_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Middle_rail_Lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Cam_followers_Smooth_rotation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Lock_nut_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Mechanical_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Mechanical_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Torque_limiter_Mechanical_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sprocket_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sprocket_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sprocket_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Deformation_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Looseness_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Looseness_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_Before_Sensing_plates_Looseness_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Fork_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Fork_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Fork_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_E_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_E_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_E_magnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Fork_plate_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Slide_Fork_Unit_During_Fork_plate_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Fork_plate_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_sound_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_vibrations_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_vibrations_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Rack_and_pinion_vibrations_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_sound_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_sound_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_sound_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Fork_motor_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Fork_motor_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Fork_motor_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Speed_reducer_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Speed_reducer_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Speed_reducer_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_E_magnetic_brake_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_E_magnetic_brake_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_E_magnetic_brake_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Bolts_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Bolts_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Slide_Fork_Unit_After_Bolts_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Fastener_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Fastener_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Fastener_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_power_feed_rail_Dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_Spring_condition_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_Spring_condition_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_arm_Spring_condition_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Power_Feed_Unit_Before_Collector_shoes_Fastener_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_Fastener_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_Fastener_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_Dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_Dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_Before_Collector_shoes_Dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Joiner_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Joiner_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Joiner_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Feed_in_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Feed_in_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Feed_in_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Current_collector_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Current_collector_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_During_Current_collector_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_After_Bolts_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_After_Bolts_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Power_Feed_Unit_After_Bolts_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Home_position_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Regular_position_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Regular_position_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Regular_position_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Regular_position_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Traveling_Detectors_Before_Regular_position_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Regular_position_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Backward_DC1_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Deceleration2_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Deceleration2_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Deceleration2_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_Spring_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_Spring_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_Before_Over_run_detectors_Spring_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Home_position_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Home_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Home_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Regular_position_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Regular_position_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Regular_position_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Traveling_Detectors_During_Forward_Deceleration1_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Forward_Deceleration1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Forward_Deceleration1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Backward_Deceleration1_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Backward_Deceleration1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Backward_Deceleration1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Deceleration2_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Deceleration2_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Deceleration2_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Over_run_detectors_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Over_run_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Traveling_Detectors_During_Over_run_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_positioning_sensors_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Pre_occupied_load_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_detect_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Carriage_Unit_Before_Load_profile_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_profile_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_profile_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_profile_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_profile_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_profile_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Load_protrusion_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_upper_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Station_lower_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Upward_deceleration1_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Carriage_Unit_Before_Downward_deceleration1_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Downward_deceleration1_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Downward_deceleration1_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Downward_deceleration1_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Downward_deceleration1_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Downward_deceleration1_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Deceleration2_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_Spring_condition_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_Spring_condition_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Chain_tension_Spring_condition_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_Before_Over_run_detectors_Spring_condition_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Carriage_positioning_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Carriage_positioning_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Carriage_positioning_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Pre_occupied_load_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Pre_occupied_load_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Pre_occupied_load_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_detect_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_detect_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_detect_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_profile_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_profile_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_profile_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_protrusion_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_protrusion_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Load_protrusion_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Station_upper_level_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Carriage_Unit_During_Station_upper_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Station_upper_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Station_lower_level_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Station_lower_level_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Station_lower_level_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Upward_deceleration1_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Upward_deceleration1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Upward_deceleration1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Downward_deceleration1_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Downward_deceleration1_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Downward_deceleration1_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Deceleration2_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Deceleration2_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Deceleration2_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Chain_tension_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Chain_tension_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Chain_tension_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Over_run_detectors_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Over_run_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Carriage_Unit_During_Over_run_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_Sensor_condition_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_Sensor_condition_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_Before_Fork_position_Sensor_condition_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_end_detectors_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_end_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_end_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_center_detectors_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_center_detectors_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Fork_Unit_During_Fork_center_detectors_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_Functionality_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_Functionality_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_e_stop_button_Functionality_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Alignment_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Alignment_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Alignment_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Functionality_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Functionality_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Optical_data_Functionality_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Alignment_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Alignment_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Alignment_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Operation_Panel_before_4bit_sensor_Functionality_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Functionality_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_4bit_sensor_Functionality_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_On_Off_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_On_Off_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_On_Off_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_Fastener_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_Fastener_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_E_magnetic_Fastener_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_damages_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_damages_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_damages_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_Turn_on_off_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_Turn_on_off_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Breaker_Turn_on_off_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_condition_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_condition_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_condition_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_Snapped_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_Snapped_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Electric_wiring_Snapped_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Power_supply_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Power_supply_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Power_supply_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_PC_Board_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_PC_Board_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_PC_Board_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_dust_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_LED_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_LED_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_LED_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_Key_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_Key_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_Key_remarks:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Control_panel_dust_result :{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Control_panel_dust_action:{
            type: DataTypes.STRING(2),
            allowNull: true,
        },
    
        Operation_Panel_before_Control_panel_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Control_panel_Wiring_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Control_panel_Wiring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Control_panel_Wiring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_buttons_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_buttons_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Operation_panel_buttons_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Indicators_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Indicators_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Indicators_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Ventilation_fan_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Ventilation_fan_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_before_Ventilation_fan_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Operation_Panel_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Dust_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_sound_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        
        Inverter_Unit_Before_Inverter_Wiring_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Inverter_Unit_Before_Inverter_Wiring_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Mast_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Mast_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Mast_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Support_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Support_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Support_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_protector_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_protector_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_protector_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_guide_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_guide_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Cable_guide_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_plug_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_plug_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_plug_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_Signages_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_Signages_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_Before_Safety_fence_Signages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        Others_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },        
        crane14_Verified_by_MNC:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        crane14_REPORT_SUMMARY:{
            type: DataTypes.STRING,
            allowNull: true,
        },


    });
    

    return Crane14CheckList;
};
