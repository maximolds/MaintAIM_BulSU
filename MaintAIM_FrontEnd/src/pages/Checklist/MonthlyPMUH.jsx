import React from 'react'

function MonthlyPMUH() {
  return (

    <form id="checklistForm">
      <h1>UH CRANE INSPECTION CHECKLIST (MONTHLY)</h1>

      <input type="submit" value="Submit" />
      <input type="button" value="Discard" onclick="discardForm()" id="discardButton" />

      <table>
        <tr>
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
      <h3>I - Hoisting Drive Section</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Inspection Item</th>
          <th>Check Point</th>
          <th>Method</th>
          <th>Result</th>
          <th>Action</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Motor</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Temperature</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Electro-magnetic brake (Gap: 0.5mm Limit: 2mm)</td>
          <td>Lining gap</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lining wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 27Litres)</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Oil level / leakage</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Grease amount</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
      </table>
      <h3>II - Travel Drive Section</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Inspection Item</th>
          <th>Check Point</th>
          <th>Method</th>
          <th>Result</th>
          <th>Action</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Motor</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Temperature</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.7mm)</td>
          <td>Lining gap</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lining wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cyclo gear reducer / Worm decelerator (Mobil gear 629, 9.5Litres)</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Oil level / leakage</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Grease amount</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Front wheel</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Rear wheel</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Top guide rollers (dia 98 mm or more)</td>
          <td>Wear & tear</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Bottom guide rollers (dia172 mm or more)</td>
          <td>Wear & tear</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Travelling sensing plate (at both end of travel)</td>
          <td>Home position</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Slowdown position</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Over-run limit position</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Bay centering</td>
          <td>Bay stop position</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>(X1/X2 measurement)</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Bottom rail</td>
          <td>Wear & tear</td>
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
          <td>Shim plate / Anchor bolt</td>
          <td>Retighten</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>

      </table>
      <h3>III - Slide Fork</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Inspection Item</th>
          <th>Check Point</th>
          <th>Method</th>
          <th>Result</th>
          <th>Action</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Motor</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Temperature</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Electro-magnetic brake (Gap: 0.2~0.3mm ; Limit: 0.5mm)</td>
          <td>Lining gap</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lining wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cyclo gear reducer</td>
          <td>Rotating sound</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Grease amount</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Rack & pinion</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lubrication</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Backlash</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Torque limiter</td>
          <td>Locknut tightness</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Mechanic operation</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Rack gear</td>
          <td>Lubrication</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Deformation</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Sprocket / idler gears</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Sprocket / idler gears</td>
          <td>Rotating sound</td>
          <td>Sound</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Stopping sensing plate</td>
          <td>Fork centering</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Fork stroke</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td><b>Fork body</b></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>a Middle rail</td>
          <td>Grove wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lubrication</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>10</td>
          <td>b Cam followers</td>
          <td>Wear & tear</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Lubrication</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>

      </table>

      <h3>IV - Trolley Unit</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Inspection Item</th>
          <th>Check Point</th>
          <th>Method</th>
          <th>Result</th>
          <th>Action</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Collector arm</td>
          <td>Fasteners condition</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wear & tear</td>
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
      </table>
      <h3>V - Control Panel Section</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Inspection Item</th>
          <th>Check Point</th>
          <th>Method</th>
          <th>Result</th>
          <th>Action</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Electro-magnetic contactors</td>
          <td>On / Off condition</td>
          <td>Touch</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Electric wiring</td>
          <td>Snapped / broken wire</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Wiring connection</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Transformer / Power supply</td>
          <td>Voltage measurement</td>
          <td>Measure</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>P.C. Board</td>
          <td>Connectors connection</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Operation panel buttons</td>
          <td>Functionality</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Indicator</td>
          <td>Functionality</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Emergency stop button</td>
          <td>Functionality</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Ventilation fan</td>
          <td>Functionality</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>9</td>
          <td>4-bit sensor</td>
          <td>Functionality</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Optical transmitter</td>
          <td>Alignment</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>LED light condition</td>
          <td>Visual</td>
          <td><input type="text" name="Result" /></td>
          <td><input type="text" name="Action" /></td>
          <td><input type="text" name="Remarks" /></td>
        </tr>
        <tbody>

          <h3>VI - Detectors/Sensors</h3>
          <table>
            <tr>
              <th>Item</th>
              <th>Inspection Item</th>
              <th>Check Point</th>
              <th>Method</th>
              <th>Result</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Pre-occupied load detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Load profile limit switch</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>High load sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Fork loaded sensor</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Carriage chain loose detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Load overhanged sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Load projection sensors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Fork end detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Fork centering detectors</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td></td>
              <td><b>Crane travelling detectors</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Home position</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>11</td>
              <td>Regular position (front)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>12</td>
              <td>Regular position (rear)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>13</td>
              <td>Forward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>14</td>
              <td>Backward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>15</td>
              <td>Dece1 2</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>16</td>
              <td>End limit (emergency)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td></td>
              <td><b>Carriage hoisting detectors</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td>Upper level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>18</td>
              <td>Lower level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>19</td>
              <td>Fork level zone</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>20</td>
              <td>Station upper level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>21</td>
              <td>Station lower level</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>22</td>
              <td>Upward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>23</td>
              <td>Downward decel 1</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>24</td>
              <td>Decel 2</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
            <tr>
              <td>25</td>
              <td>End limit (emergency)</td>
              <td>I/O Check</td>
              <td>Touch</td>
              <td><input type="text" name="Result" /></td>
              <td><input type="text" name="Action" /></td>
              <td><input type="text" name="Remarks" /></td>
            </tr>
          </table>


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

  )
}

export default MonthlyPMUH