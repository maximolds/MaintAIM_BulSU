import React from 'react'
import "../Checklist/MonthlyPM13.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import './MonthlyPM13.css'
function MonthlyPM13() {

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


        <form id="checklistForm">
            <h1 className='text-3xl font-extrabold dark:text-gray-200'>CRANE 13 INSPECTION CHECKLIST (MONTHLY)</h1>
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
                            <label for="InspectorName">Inspected by:</label>
                            <input className='w-100' type="text" id="InspectorName" name="InspectorName" />
                        </div>
                    </td>
                    <td>
                        <div class="textbox-container">
                            <label for="ApprovedBySupervisor">Approved by (Supervisor):</label>
                            <input type="text" id="ApprovedBySupervisor" name="ApprovedBySupervisor" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="textbox-container">
                            <label for="CraneNumber">Crane Number:</label>
                            <input type="text" id="CraneNumber" name="CraneNumber" />
                        </div>
                    </td>
                    <td>
                        <div class="textbox-container">
                            <label for="Date">Date:</label>
                            <input type="date" id="Date" name="Date" />
                        </div>
                    </td>
                    <td>
                        <div class="textbox-container">
                            <label for="TimeStart">Time Start:</label>
                            <input type="time" id="TimeStart" name="TimeStart" />
                        </div>
                    </td>
                    <td>
                        <div class="textbox-container">
                            <label for="TimeEnd">Time End:</label>
                            <input type="time" id="TimeEnd" name="TimeEnd" />
                        </div>
                    </td>
                </tr>
            </table>
            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Travel Drive Unit</h2>
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
                    <td>Travel motor</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Oil leakage</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Oil level</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Lining wear and tear</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Brake gap (0.25mm - 0.60mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Travel guide roller</td>
                    <td>Diameter is 158mm or more</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Drive wheel</td>
                    <td>Abrasion or cracks</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Surface abrasion: less than 2%</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Free wheel</td>
                    <td>Abrasion or cracks</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Surface abrasion: less than 2%</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Encoder</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Travel motor</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Travel wheel</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Free wheel</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Travel Motor</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Hoisting Drive Unit</h2>
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
                    <td>Hoist motor</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Oil leakage</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Oil level</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Lining wear and tear</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Brake gap (0.40mm - 1.20mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hoisting chain</td>
                    <td>Abrasion, damage or rust</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Chain tension</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Elongation</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lubrication</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hoisting encoder</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Hoisting motor</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lateral vibrations</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Hoisting motor</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Hoisting Carriage</h2>
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
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hoisting guide rollers</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Clearance to mast</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Diameter (over 119mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hoisting face rollers</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Diameter (over 75mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Load profile detector arm</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Spring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bay count shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Home position shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>Bef.</td>
                    <td>Deceleration shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Over-run flag</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Position</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Hoisting guide rollers</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hoisting face rollers</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shielding plates</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Top & Bottom Rails</h2>
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
                    <td>Top rail</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Rail joint condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Bolts and nuts</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bottom rail</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Rail joint condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shim plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Missing</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Anchor bolts</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>

                <tr>
                    <td></td>
                    <td>Bay count shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Home position shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deceleration shielding plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Over-run flag</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Position</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Top rail</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bottom Rail</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shielding plates</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Upper & Lower Frames</h2>
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
                    <td>Upper frame</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket (Upper frame)</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Upper travel guide roller</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Diameter (over 75mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Lower frame</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket (Lower frame)</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Lower travel guide roller</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Diameter (over 123mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Upper travel guide roller</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Lower travel guide roller</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lateral vibrations</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Slide Fork Unit</h2>
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
                    <td>Fork body frame</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Fork motor</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Grease amount</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Lining wear and tear</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Brake gap (0.15mm - 0.50mm)</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Fork drive chain</td>
                    <td>Damage, abrasion or rust.</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Chain tension (within 5mm)</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lubrication</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Elongation</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>Before</td>
                    <td>Cam followers</td>
                    <td>Abrasion and deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lubrication</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Smooth rotation</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Torque limiter</td>
                    <td>Lock nut tighteness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Mechanical operation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket / idler rollers</td>
                    <td>Abrasion or deformation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sensing plates</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Fork motor</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Fork plate</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Sprocket / idler rollers</td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Lateral vibrations</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Fork motor</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Speed reducer</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic brake</td>
                    <td>Overheating</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Power Feed Unit</h2>
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
                    <td>Power feed rail</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Fastener condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Collector arm</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Spring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Collector shoes</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Fastener condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Fastener condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Joiner</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Feed in</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Current collector</td>
                    <td>Smooth traveling at section</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Traveling Detectors & I/O Checks</h2>
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
                    <td>Home position detector</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Regular position detector
                        (Front & rear)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Forward Deceleration 1</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr><tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Backward Deceleration 1</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deceleration 2</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Over-run detectors
                        (Limit switch)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Spring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Home position detector</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Regular position detector</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Forward Deceleration 1</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Backward Deceleration 1</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deceleration 2</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Over-run detectors (2 directions)</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>

            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Carriage Unit Detectors & I/O Checks</h2>
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
                    <td>Carriage positioning sensors (Up & down)</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pre-occupied load sensors</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Load detect sensors</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Load profile detectors
                        (Proximity type)</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Load protrusion sensors</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Station upper level</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Station lower level</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Upward deceleration 1</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Downward deceleration 1</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deceleration 2</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Chain tension detectors
                        (Limit switch)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Spring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Overun detectors
                        (Limit switch)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Spring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Carriage positioning sensors</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pre-occupied load sensors</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Load detect sensors</td>
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
                    <td>Load protrusion sensors</td>
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
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Station lower level</td>
                    <td>I/O check</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Upward deceleration 1</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Downward deceleration 1</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Deceleration 2</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Chain tension detectors</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Over-run detectors
                        (2 directions)</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>
            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Fork Unit Detectors & I/O Checks</h2>
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
                    <td>Fork position detectors
                        (Limit switch/ proximity sensor)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Sensor condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td>Fork end detectors</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Fork center detectors</td>
                    <td>I/O check</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>
            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Operation Panel and Controller</h2>
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
                    <td>Emergency-stop button
                        (Crane & controller)</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Functionality</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Optical data transmitter</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Alignment</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Functionality</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>4 bit sensor</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Alignment</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Functionality</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electro-magnetic contactors</td>
                    <td>On / Off condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Fastener condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Breaker</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Turn on and off properly</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Electric wiring</td>
                    <td>Wiring condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Snapped/ broken wire</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Power supply</td>
                    <td>Voltage measurement</td>
                    <td>Measure</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>P.C. Board</td>
                    <td>Connectors connection</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Operation panel</td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>LED indicator</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Key switch functionality</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Operation/Control panel</td>
                    <td>Dust accumulation</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Wiring condition</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Operation panel buttons</td>
                    <td>Functionality</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Indicators</td>
                    <td>Functionality</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Ventilation fan</td>
                    <td>Functionality</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>
            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Inverter Unit</h2>
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
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Dust accumulation</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Wiring condition</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>During</td>
                    <td></td>
                    <td>Abnormal sound</td>
                    <td>Sound</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td></td>
                    <td>Bolts / screws looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
            </table>
            <h2 className='text-3xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>Others</h2>
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
                    <td>Mast</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Support</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Cable</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Cable protector</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Cable guide</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Safety plug</td>
                    <td>Functionality</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Safety fence</td>
                    <td>Deformation or damages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Signages</td>
                    <td>Visual</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>
                <tr>
                    <td>After</td>
                    <td>Bolts / screws</td>
                    <td>Looseness</td>
                    <td>Touch</td>
                    <td><input type="text" name="Result" /></td>
                    <td><input type="text" name="Action" /></td>
                    <td><input type="text" name="Remarks" /></td>
                </tr>









                <tr>
                    <td><b>Result</b> O=Good ∆=Fair X=Defective</td>

                </tr>
                <tr>
                    <td><b>Action</b> A=Adjust C=Clean R=Replace M=Make repair T=Tighten O=Overhaul L=Lubricate</td>
                </tr>
            </table>
            <h2 className='text-xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>CHAIN ELONGATION MEASUREMENT:</h2>
            <img src="C:\Users\Angeline Baluyot\Downloads\Crane13.jpg" alt="CHAIN ELONGATION MEASUREMENT:" />

            <h2 className='text-xl font-extrabold ml-3 mt-5 mb-2 dark:text-gray-200'>INSPECTION SUMMARY/RECOMMENDATION:</h2>
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

    )
}

export default MonthlyPM13