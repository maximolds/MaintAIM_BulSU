import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';

function DailyCIL() {

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
        <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>Daily CIL</h1>

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
          <tbody><tr>
            <td>
              <div class="textbox-container">
                <label for="InspectorName">Inspected by:</label>
                <input type="text" id="InspectorName" name="InspectorName" />
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
            </tr>
          </tbody></table>

        <h2 className='text-2xl font-extrabold dark:text-gray-200'>Crane</h2>
        <table>
          <tbody><tr class="center-text">
            <th>Parts for Inspection</th>
            <th>Inspection Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
          </tr>

            <tr>
              <td>Control Panel, DCU, MCU</td>
              <td>Check for cleanliness, damage or deformation</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Stationary Operation Tower</td>
              <td>Check for cleanliness, damage or deformation, alignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Remote Controller</td>
              <td>Check remote and cable for damages</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Guard fence</td>
              <td>Check for cleanliness, damage or deformation</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Travel Mechanisms</td>
              <td>Check for cleanliness, damage, motor and wheel rotating abnormal sound</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Hoisting Mechanisms</td>
              <td>Check for cleanliness, damage cable, chain tension, lubrication, motor abnormal sound</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Fork Mechanisms</td>
              <td>Check for cleanliness, damage, chain tension &amp; lubrication, table fork and anti-slip surface, motor for abnormal sound</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Wire Rope</td>
              <td>Check for damage, tension, and lubrication</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Optical Transmitter</td>
              <td>Check for accumulation of dust and LED light condition</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Load profile</td>
              <td>Check cable alignment and tension</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Upper rail</td>
              <td>Check alignment of upper rail</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Lower rail</td>
              <td>Check alignment of lower rail and check for bolt tightness</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Rack aisle</td>
              <td>Check for cleanliness of rack aisle areas (No fallen stocks, and waste)</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Rack</td>
              <td>Check for damage misaligned rack</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
          </tbody></table>
        <h2 className='text-2xl font-extrabold dark:text-gray-200'>1F Conveyor</h2>
        <table>
          <tbody><tr>
            <th>Parts for Inspection</th>
            <th>Inspection Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
            <tr>
              <td>Frame</td>
              <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Chain</td>
              <td>Check chain tension and lubrication</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Motors</td>
              <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Limit Switches</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Photo Sensors</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Terminal Box</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Cable Tray</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Wiring and Cable</td>
              <td>Check for damaged wires and harnessing</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Floor</td>
              <td>Check for cleanliness</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
          </tbody></table>
        <h2 className='text-2xl font-extrabold dark:text-gray-200'>2F Conveyor</h2>
        <table>
          <tbody><tr>
            <th>Parts for Inspection</th>
            <th>Inspection Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
            <tr>
              <td>Frame</td>
              <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Chain</td>
              <td>Check chain tension and lubrication</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Motors</td>
              <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Limit Switches</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Photo Sensors</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Terminal Box</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Cable Tray</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Wiring and Cable</td>
              <td>Check for damaged wires and harnessing</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Floor</td>
              <td>Check for cleanliness</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
          </tbody></table>

        <h2 className='text-2xl font-extrabold dark:text-gray-200'>Anti-Home Conveyor</h2>
        <table>
          <tbody><tr>
            <th>Parts for Inspection</th>
            <th>Inspection Point</th>
            <th>Method</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
            <tr>
              <td>Frame</td>
              <td>Check for cleanliness, damage, severe vibration, and abnormal sound during operation</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Chain</td>
              <td>Check chain tension and lubrication</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Motors</td>
              <td>Check for crack or damage, grease leakage, and abnormal sound during operation</td>
              <td>V, T, S</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Limit Switches</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Photo Sensors</td>
              <td>Check for cleanliness, damage, and misalignment</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Terminal Box</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Cable Tray</td>
              <td>Check for cleanliness, damage or deformation, check cover</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Wiring and Cable</td>
              <td>Check for damaged wires and harnessing</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
            <tr>
              <td>Floor</td>
              <td>Check for cleanliness</td>
              <td>V, T</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
            </tr>
          </tbody></table>


        <div class="textbox-container">
          <h2>Remarks:</h2>
        </div>


        <table>

          <tbody><tr>
            <td colspan="2">
              <textarea id="Remarks" name="Remarks" rows="6" cols="50"></textarea>
            </td>
          </tr>
            <tr>
              <td>
                <p><strong>Method</strong> (M = Measure, S = Sound, T = Touch, V = Visual)</p>
              </td>
              <td>
                <p><strong>Result</strong> (G = Good, NG = Not Good)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong>Action</strong> (A - Adjust, C - Cleaned, M - Make Repair, R - Replace)</p>
              </td>
              <td>
                <div class="textbox-container">
                  <strong>Verified by (MNC)</strong>
                  <input type="text" id="VerifiedByMNC" name="VerifiedByMNC" />
                </div>
              </td>

            </tr>

          </tbody></table>

      </form>
    </div>
  )
}

export default DailyCIL