module.exports = (sequelize, DataTypes) => {

    const Crane13CheckList = sequelize.define("Crane13CheckList", {
        crane13_inspected_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        crane13_approved_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        crane13_no: {
            type: DataTypes.INTEGER, 
            allowNull: true
        },
        crane13_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        crane13_time_start: {
            type: DataTypes.TIME,
            allowNull: true
        },
        crane13_time_end: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Travel_Drive_Unit_before_travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_damages_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_leakage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_leakage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_leakage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_level_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_level_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Speed_reducer_level_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_brake_lining_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_brake_lining_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_brake_lining_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_Electro_magnetic_break_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_guide_roller_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Travel_Drive_Unit_before_guide_roller_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_guide_roller_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_cracks_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_cracks_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_cracks_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_surface_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_surface_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_drive_wheel_surface_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_cracks_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_cracks_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_cracks_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_surface_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_surface_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_free_wheel_surface_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_encoder_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_encoder_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_before_encoder_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Electro_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Electro_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Electro_magnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Travel_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Travel_Drive_Unit_during_Travel_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_Travel_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_free_wheel_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_free_wheel_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_during_free_wheel_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_travel_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_travel_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_travel_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Travel_Drive_Unit_after_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoist_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoist_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoist_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_leakage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_leakage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_leakage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Hoisting_Drive_Unit_before_Speed_reducer_level_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_level_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Speed_reducer_level_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_lining_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_lining_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_lining_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Electro_magnetic_brake_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_tension_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_tension_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_tension_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_elongation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_elongation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_elongation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_Sprocket_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_Sprocket_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_Sprocket_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Hoisting_Drive_Unit_before_Hoisting_chain_encoder_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_encoder_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_before_Hoisting_chain_encoder_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Hoisting_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Hoisting_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Hoisting_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_electro_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_electro_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_electro_magnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_sound_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_vibrations_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_vibrations_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_during_Sprocket_vibrations_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Hoisting_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Hoisting_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Hoisting_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Hoisting_Drive_Unit_after_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Drive_Unit_after_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Carriage_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Carriage_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Carriage_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_clearance_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_clearance_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_clearance_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_guide_rollers_diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_face_rollers_diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_Spring_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_Spring_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Load_profile_Spring_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Hoisting_Carriage_before_Bay_count_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Bay_count_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Bay_count_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Home_position_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Home_position_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Home_position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Deceleration_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Deceleration_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Deceleration_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Over_run_flag_deformation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Over_run_flag_deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Ove_run_flag_deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Over_run_flag_position_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Over_run_flag_position_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_before_Over_run_flag_position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_guide_rollers_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_guide_rollers_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_guide_rollers_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_face_rollers_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_face_rollers_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_face_rollers_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_Shielding_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_Shielding_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_During_Shielding_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_after_bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_after_bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Hoisting_Carriage_after_bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_joint_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_joint_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_joint_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Top_Bottom_Rails_before_top_rail_bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_top_rail_bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_joint_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_joint_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_bottom_rail_joint_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_missing_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_missing_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Shim_plates_missing_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Anchor_bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Anchor_bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Anchor_bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Bay_count_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Bay_count_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Bay_count_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Home_position_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Home_position_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Home_position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Deceleration_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Deceleration_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Deceleration_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Over_run_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Over_run_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Top_Bottom_Rails_before_Over_run_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Over_run_Position_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Over_run_Position_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_before_Over_run_Position_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Top_rail_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Top_rail_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Top_rail_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Bottom_rail_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Bottom_rail_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Bottom_rail_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Shielding_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Shielding_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_during_Shielding_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_after_bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_after_bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Top_Bottom_Rails_after_bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_frame_acction: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Upper_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Upper_guide_roller_diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Upper_Lower_Frames_Before_Lower_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Lower_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Lower_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Sprocket_Lower_frame_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_lower_guide_roller_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_Before_Lower_guide_roller_diameter_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_upper_guide_roller_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_upper_guide_roller_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_upper_guide_roller_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_lower_guide_roller_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_lower_guide_roller_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_lower_guide_roller_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_sound_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_vibrations_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_vibrations_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_during_Sprocket_vibrations_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_after_bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_after_bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Upper_Lower_Frames_after_bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue modifying the rest of the fields in a similar fashion
        
        Slide_Fork_Unit_Before_Fork_body_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_body_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_body_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Speed_reducer_Grease_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_lining_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Electro_magnetic_brake_gap_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_tension_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_tension_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_tension_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_elongation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_elongation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Fork_drive_elongation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Slide_Fork_Unit_Before_Cam_followers_abrasion_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_abrasion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_abrasion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_lubrication_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_lubrication_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_lubrication_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_rotation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_rotation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Cam_followers_rotation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_Lock_nut_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_Lock_nut_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_Lock_nut_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_mechanical_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_mechanical_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Torque_mechanical_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sprocket_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sprocket_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sprocket_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sensing_plates_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sensing_plates_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_Before_Sensing_plates_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_motor_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_motor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue with other properties as needed
        
        Slide_Fork_Unit_During_Speed_reducer_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Speed_reducer_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Electro_magnetic_brake_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Electro_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Electro_magnetic_brake_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_plate_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_plate_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Fork_plate_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_sound_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_sound_remarks : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_During_Sprocket_vibrations_remarks : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Fork_motor_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Fork_motor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Fork_motor_remarks : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Speed_reducer_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Speed_reducer_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Speed_reducer_remarks : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Electro_magnetic_brake_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Electro_magnetic_brake_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Electro_magnetic_brake_remarks : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Bolts_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Slide_Fork_Unit_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue with other properties as needed
        
        Slide_Fork_Unit_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Fastener_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Fastener_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Fastener_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Dust_accumulation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Dust_accumulation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_feed_rail_Dust_accumulation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_Spring_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_Spring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_arm_Spring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Fastener_condition_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Fastener_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Fastener_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Dust_accumulation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Dust_accumulation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_Before_Collector_shoes_Dust_accumulation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Joiner_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Joiner_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Joiner_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Feed_in_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Power_Feed_During_Feed_in_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Feed_in_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Current_collector_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Current_collector_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_During_Current_collector_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_After_Bolts_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Power_Feed_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Home_position_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Regular_position_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Forward_Deceleration1_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue with other properties as needed
        
        Traveling_Detectors_Before_Backward_Deceleration1_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Backward_Deceleration1_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Backward_Deceleration1_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Backward_Deceleration1_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Backward_Deceleration1_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Backward_Deceleration1_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Deceleration2_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Deceleration2_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Deceleration2_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Over_run_detectors_damage_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Over_run_detectors_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_Before_Over_run_detectors_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Home_position_detector_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Home_position_detector_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Home_position_detector_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Regular_position_detector_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Regular_position_detector_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Regular_position_detector_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Forward_Deceleration1_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Forward_Deceleration1_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Forward_Deceleration1_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Backward_Deceleration1_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Backward_Deceleration1_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Backward_Deceleration1_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Deceleration2_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Deceleration2_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Deceleration2_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Over_run_detectors_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue with other properties as needed
        
        Traveling_Detectors_During_Over_run_detectors_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Traveling_Detectors_During_Over_run_detectors_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_dust_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_positioning_sensors_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_dust_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Pre_occupied_load_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_dust_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_detect_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_profile_deformation_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_profile_deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_profile_deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_profile_LED_result: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_profile_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        // Continue with other properties as needed
        
        Carriage_Unit_before_Load_profile_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Load_protrusion_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_upper_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_lower_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_lower_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_lower_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Carriage_Unit_before_Station_lower_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_lower_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Station_lower_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Upward_deceleration1_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Downward_deceleration1_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Deceleration2_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Chain_tension_deformation_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Chain_tension_deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Chain_tension_deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Chain_tension_Spring_condition_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Carriage_Unit_before_Chain_tension_Spring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Chain_tension_Spring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_deformation_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_deformation_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_deformation_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_Spring_condition_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_Spring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_before_Overun_detectors_Spring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Carriage_positioning_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Carriage_positioning_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Carriage_positioning_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Pre_occupied_load_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Pre_occupied_load_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Pre_occupied_load_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_detect_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_detect_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_detect_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_profile_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_profile_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_profile_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_protrusion_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_protrusion_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Load_protrusion_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Station_upper_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Station_upper_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Station_upper_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Station_lower_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Carriage_Unit_during_Station_lower_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Station_lower_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Upward_deceleration1_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Upward_deceleration1_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Upward_deceleration1_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Downward_deceleration1_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Downward_deceleration1_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Downward_deceleration1_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_deceleration2_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_deceleration2_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_deceleration2_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Chain_tension_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Chain_tension_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Chain_tension_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Over_run_detectors_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Over_run_detectors_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Carriage_Unit_during_Over_run_detectors_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_damage_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_damage_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_damage_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_Sensor_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_Sensor_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_before_position_detectors_Sensor_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Fork_Unit_during_end_detectors_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_during_end_detectors_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_during_end_detectors_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_during_center_detectors_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_during_center_detectors_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Fork_Unit_during_center_detectors_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_Functionality_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_Functionality_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_stop_button_Functionality_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Alignment_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Alignment_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Alignment_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Functionality_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Functionality_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Optical_data_Functionality_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        
        Operation_Panel_before_4_bit_sensor_Dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Alignment_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Alignment_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Alignment_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Functionality_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Functionality_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_4_bit_sensor_Functionality_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_On_Off_condition_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_On_Off_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_On_Off_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_Fastener_condition_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_Fastener_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_E_magnetic_Fastener_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_Turn_on_off_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_Turn_on_off_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Breaker_Turn_on_off_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_condition_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_condition_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_condition_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_Snapped_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_Snapped_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Electric_wiring_Snapped_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Power_supply_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Power_supply_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Power_supply_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_PC_Board_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_PC_Board_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_PC_Board_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_LED_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_LED_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_LED_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_Key_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_Key_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Operation_panel_Key_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_Wiring_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_Wiring_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Control_panel_Wiring_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_panel_buttons_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_panel_buttons_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_panel_buttons_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Indicators_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Indicators_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Indicators_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Ventilation_fan_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Ventilation_fan_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_before_Ventilation_fan_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_After_Bolts_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Operation_Panel_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_dust_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_dust_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_dust_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_Wiring_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_Wiring_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_Before_Inverter_Wiring_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_During_Inverter_sound_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_During_Inverter_sound_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_During_Inverter_sound_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_After_Inverter_Bolts_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_After_Inverter_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Inverter_Unit_After_Inverter_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Mast_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Mast_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Mast_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Support_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Support_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },

        Others_Before_Support_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_protector_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_protector_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_protector_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_guide_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_guide_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Cable_guide_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_plug_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_plug_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_plug_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_damages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_damages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_damages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_Signages_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_Signages_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_Before_Safety_fence_Signages_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_After_Bolts_result : {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_After_Bolts_action: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        Others_After_Bolts_remarks: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        CRANE13_INSPECTION_SUMMARY_RECOMMENDATION: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CRANE13_Verified_by_MNC: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });

    return Crane13CheckList;
}      





    
    



