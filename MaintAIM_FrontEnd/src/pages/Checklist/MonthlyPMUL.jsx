import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import './MonthlyPMUL.css'

function MonthlyPMUL() {

    let navigate = useNavigate();
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();

    const login = () => {
        const data = { email: email, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data);
                navigate("/");
            }

        });
    };

    return (
        <div>
            <form id="checklistForm">
                <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>UL CRANE INSPECTION CHECKLIST (MONTHLY)</h1>

                <div className='flex mt-2'>
                    <button

                        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
rounded-xl buttonShadow mt-4 mr-2  
bg-white hover:text-black flex justify-center border-1 border-fade-blue
items-center text-center`}
                        style={{ color: currentColor }}
                        onClick={login}
                    >Submit</button>

                    <button
                        onClick={() => navigate('/checklistsmenu')}
                        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                        style={{ backgroundColor: currentColor }}
                    >
                        Discard
                    </button>
                </div>


                <table>
                    <tr>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_inspected_by">Inspected by:</label>
                                <input type="text" id="ul_crane_inspected_by" name="ul_crane_inspected_by" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_approved_by">Approved by (Supervisor):</label>
                                <input type="text" id="ul_crane_approved_by" name="ul_crane_approved_by" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_no">Crane Number:</label>
                                <input type="text" id="ul_crane_no" name="ul_crane_no" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_date">Date:</label>
                                <input type="date" id="ul_crane_date" name="ul_crane_date" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_time_start">Time Start:</label>
                                <input type="time" id="ul_crane_time_start" name="ul_crane_time_start" />
                            </div>
                        </td>
                        <td>
                            <div class="textbox-container">
                                <label for="ul_crane_time_end">Time End:</label>
                                <input type="time" id="ul_crane_time_end" name="ul_crane_time_end" />
                            </div>
                        </td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Crane Drive Unit</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Crane motor</td>
                        <td>Check for cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_Before_Crane_motor_Result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_Before_Crane_motor_Actions" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_Before_Crane_motor_Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Check for cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_cracks_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_cracks_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_cracks_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for grease leaking</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_leaking_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_leaking_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_leaking_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for grease quantity/level</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_level_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_level_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_reducer_level_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Brake gap</td>
                        <td>Check clearance. (KB=0.3 - 0.8) (XB-4=0.25 - 0.6) mm</td>
                        <td>Measure</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_break_gap_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_break_gap_remarks" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_break_gap_action" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Traveling guide roller</td>
                        <td>Check for diameter. (over 98mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_guide_roller_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_guide_roller_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_guide_roller_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Crane wheels</td>
                        <td>Check for diameter (limit 196mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_diameter_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check if there is any damage or deformation to the crane wheels</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_before_crane_wheels_damage_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Crane Motor</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Crane_Drive_Unit_during_crane_motor_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_crane_motor_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_crane_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Crane_Drive_Unit_during_speed_reducer_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_speed_reducer_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Traveling guide roller</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Crane_Drive_Unit_during_guide_Roller_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_guide_Roller_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_during_guide_Roller_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Crane Motor</td>
                        <td>Check for overheating</td>
                        <td>Touch</td>
                        <td><input type="text" name="Crane_Drive_Unit_after_crane_motor_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_crane_motor_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_crane_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Check for overheating</td>
                        <td>Touch</td>
                        <td><input type="text" name="Crane_Drive_Unit_after_speed_reducer_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_speed_reducer_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_speed_reducer_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Crane_Drive_Unit_after_screws_result" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_screws_action" /></td>
                        <td><input type="text" name="Crane_Drive_Unit_after_screws_remarks" /></td>
                    </tr>

                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Carriage Drive Unit</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Carriage motor</td>
                        <td>Check for cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_motor_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_motor_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Speed reducer</td>
                        <td>Check for cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_cracks_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for grease leaking</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_leaking_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for grease qty</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_speed_reducer_grease_qty_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Brake gap</td>
                        <td>Check clearance. (within 0.4 - 0.5mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_break_gap_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_break_gap_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_break_gap_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wire rope</td>
                        <td>Check damage, abrasion, rust and worn out</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_damage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for proper installation on drum groove</td>
                        <td>Touch</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_installation_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for lubrication</td>
                        <td>Touch</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_lubrication_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for extra rope held on drum at least 2 times</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wire_rope_extra_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wiring drum</td>
                        <td>Check for damage and abrasion</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wiring_drum_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wiring_drum_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_wiring_drum_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Carriage encoder</td>
                        <td>Check for Installation</td>
                        <td>Touch</td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_encoder_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_encoder_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_before_carriage_encoder_remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Motor & drum</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_motor_drum_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_motor_drum_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_motor_drum_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wiring drum</td>
                        <td>Check for horizontal vibration</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wiring_drum_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wiring_drum_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wiring_drum_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wire rope</td>
                        <td>Check if rope is winded smoothly</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wire_rope_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wire_rope_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_during_wire_rope_remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Carriage motor</td>
                        <td>Check for overheating</td>
                        <td>Touch</td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_carriage_motor_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_carriage_motor_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_carriage_motor_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_screws_result" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_screws_action" /></td>
                        <td><input type="text" name="Carriage_Drive_Unit_after_screws_remarks" /></td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Hoisting Carriage</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Carriage frame</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_Carriage_frame_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_Carriage_frame_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_Carriage_frame_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wire rope</td>
                        <td>Check for damage, abrasion and rust</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_damage_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_damage_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_damage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for lubrication</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_wire_rope_lubrication_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting guide roller</td>
                        <td>Check diameter. (over 119mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Hoisting_Carriage_before_guide_roller_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_guide_roller_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_guide_roller_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hoisting face roller</td>
                        <td>Check diameter. (over 59mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Hoisting_Carriage_before_face_roller_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_face_roller_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_face_roller_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load displacement detection wire</td>
                        <td>Check function</td>
                        <td>Touch</td>
                        <td><input type="text" name="Hoisting_Carriage_before_displacement_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_displacement_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_displacement_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Count plate</td>
                        <td>Check for deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_count_plate_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_count_plate_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_count_plate_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Dog on dec. sensor</td>
                        <td>Check for deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_dec_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_dec_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_dec_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Dog on Emg. Stop sensor</td>
                        <td>Check for deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_Emg_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_Emg_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_dog_on_Emg_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Carriage positioning sensor</td>
                        <td>Check for damage and rust accumulation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_damage_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check if lamp comes on</td>
                        <td>Touch</td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_positioning_sensor_lamp_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load detector</td>
                        <td>Check if lamp comes on</td>
                        <td>Touch</td>
                        <td><input type="text" name="Hoisting_Carriage_before_load_detector_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_load_detector_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_load_detector_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Emergency stop sensor</td>
                        <td>Check for looseness</td>
                        <td>Touch</td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_looseness_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_looseness_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_looseness_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for function</td>
                        <td>Sound</td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_function_result" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_function_action" /></td>
                        <td><input type="text" name="Hoisting_Carriage_before_emergency_function_remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Limit switch for detecting wire tension</td>
                        <td>Check for looseness</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Wire clip</td>
                        <td>Check for looseness</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Hoisting guide roller</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load displacement detection wire</td>
                        <td>Check if error occurs correctly</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Slide Fork</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Fork</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pre-occupied load detector</td>
                        <td>Check for damage and dust accumulation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork drive chain</td>
                        <td>Check for damage abrasion or rust</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for chain slack. (within 5mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for lubrication</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check Elongation</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cam follower</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cam follower</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for lubrication</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check it it rotates smoothly</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Limit SW for detecting side end and range</td>
                        <td>Check for looseness</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for function</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket</td>
                        <td>Check for damage or abrasion</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork motor</td>
                        <td>Check for cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Brake gap</td>
                        <td>Check clearance. (FB05=0.2-0.5) (FBIA=0.15-0.5)mm</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Torque limitter</td>
                        <td>Check for damage cracks</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for set value. (within 235N-m)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork</td>
                        <td>CExtract the fork with load to empty cell. Check  if there is proper clearance of 15mm between fork end and the cell</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Fork</td>
                        <td>Check for abnormal sound</td>
                        <td>Sound</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sprocket</td>
                        <td>Check for horizontal vibration</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pre-occupied load detector</td>
                        <td>Check if it detects the load correctly</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Frames</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Traveling guide roller</td>
                        <td>Check for diameter. (within 78mm)</td>
                        <td>Measure</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upper sheave</td>
                        <td>Check for damage or abrasion</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Power feed rail</td>
                        <td>Check for damage or abrasion</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Current collector</td>
                        <td>Check for damage or abrasion</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upper frame</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lower frame</td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Upper guide roller</td>
                        <td>Check for abnormal sound</td>
                        <td>sound</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Rails and Countplate</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Bottom guide roller</td>
                        <td>Check for damage or deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Top guide roller</td>
                        <td>Check for damage or deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Count plate</td>
                        <td>Check for damage or deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Dog on Emg. Stop sensor</td>
                        <td>Check deformation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Bottom guide rail</td>
                        <td>Check for smooth travelling at sections</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Top guide rail</td>
                        <td>Check for smooth travelling at sections</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Count plate</td>
                        <td>Check for smooth travelling at count plate</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Sensors</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Crane sensor</td>
                        <td>Check for damage and dust accumulation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>LW for Emg. Stop</td>
                        <td>Check for function</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Optical data transmiiter</td>
                        <td>Check for damage and dust accumulation</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Panels and Ladder</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Operational panel</td>
                        <td>Check for cleaning</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check if lamp comes on</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check if all keys activate correctly</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Operational/Control panel</td>
                        <td>Check for cleaning</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for wiring</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Safety plug</td>
                        <td>Check if message is displayed correctly</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Safety fence</td>
                        <td>Check if the sign is fixed on the fence</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td>After</td>
                        <td>Screws</td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Inverter Unit</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>Before</td>
                        <td>Inverter</td>
                        <td>Check for wiring</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check if bolts/screws are loose</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for abnormal sound</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for cleaning</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for damage</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Check for function of moving parts</td>
                        <td>Visual</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Carriage/Fork Detectors</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Pre-occupied load detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Load profile detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork loaded sensor</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Carriage chain loose detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork end detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork centering detectors</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>Crane Travelling Detectors</h2>
                <table>
                    <tr>
                        <th>Op</th>
                        <th>Inspection Item</th>
                        <th>Check Point</th>
                        <th>Method</th>
                        <th>Result</th>
                        <th>Action</th>
                        <th>Remarks</th>
                    </tr>
                    <tr>
                        <td>During</td>
                        <td>Home position</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Regular position (front)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Regular position (rear)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Forward decel 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Backward decel 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Decel 2</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>End limit (emergency)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upper level</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lower level</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fork level zone</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station upper level</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Station lower level</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Upward decel 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Downward decel 1</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>End limit (emergency)</td>
                        <td>I/O check</td>
                        <td>Touch</td>
                        <td><input type="text" name="Result" /></td>
                        <td><input type="text" name="Action" /></td>
                        <td><input type="text" name="Remarks" /></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><b>Result</b> O=Good ∆=Fair X=Defective</td>

                    </tr>
                    <tr>
                        <td><b>Action</b> A=Adjust C=Clean R=Replace M=Make repair T=Tighten O=Overhaul L=Lubricate</td>
                    </tr>
                </table>
                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>CHAIN ELONGATION MEASUREMENT:</h2>
                <img src="C:/Users/Angeline Baluyot/Downloads/CHAIN ELONGATION MEASUREMENT.jpg" alt="CHAIN ELONGATION MEASUREMENT:" />

                <h2 className='text-2xl font-extrabold dark:text-gray-200 mb-3'>INSPECTION SUMMARY/RECOMMENDATION:</h2>
                <div class="inspection-summary">
                    <textarea id="summary" name="summary"></textarea>
                </div>

                <td>
                    <div class="textbox-container">
                        <label for="VerifiedByMNC">Verified by (MNC):</label>
                        <input type="text" id="VerifiedByMNC" name="VerifiedByMNC" />
                    </div>
                </td>
            </form>
        </div>
    )
}

export default MonthlyPMUL