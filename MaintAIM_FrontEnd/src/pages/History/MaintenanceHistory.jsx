import React, { useEffect, useState } from 'react';
import {
  GridComponent, Inject, ColumnsDirective,
  ColumnDirective, Search, Page, Toolbar
} from '@syncfusion/ej2-react-grids';

import { employeesData, maintenanceHistoryGrid } from '../../data/dummy';
import { Header } from '../../components';

import { Link, NavLink } from "react-router-dom";

import axios from "axios";

const MaintenanceHistory = () => {

  const toolbarOptions = ['Search'];

  const [listOfMaintenanceHistory, setListOfMaintenanceHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/maintenancehistory").then((response) => {
      setListOfMaintenanceHistory(response.data);
    });
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header
          category="Page"
          title="Maintenance History"
        />
        <NavLink
          to={`/history-add-record`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-8 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>

      </div>


      <GridComponent
        dataSource={listOfMaintenanceHistory}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}

        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          <ColumnDirective field='crane_number' headerText='Crane Number'  textAlign='Left' width='100' type='number' />
          <ColumnDirective field='personnel_incharge' headerText='Personnel Incharge' textAlign='Left' width='100' type='string' />
          <ColumnDirective field='part_replaced' headerText='Part Replaced' textAlign='Left' width='100' type='string' />
          <ColumnDirective field='date_replaced' headerText='Date Replaced' textAlign='Left' width='100' type='date' />
          <ColumnDirective field='previous_date_replaced' headerText='Previous Date Replaced' textAlign='Left' width='100' type='date' />
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default MaintenanceHistory;