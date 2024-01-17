import React, { useEffect, useState } from 'react';
import {
  GridComponent, Inject, ColumnsDirective,
  ColumnDirective, Search, Page, Toolbar, ExcelExport
} from '@syncfusion/ej2-react-grids';

import { employeesData, maintenanceHistoryGrid } from '../../data/dummy';
import { Header } from '../../components';
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import DataTable from 'react-data-table-component';

const Checklists = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Crane Number',
      selector: row => row.Daily_CIL_Crane_Number,
      sortable: true,
    },
    {
      name: 'Insepecte by',
      selector: row => row.Daily_CIL_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.Daily_CIL_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.Daily_CIL_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-blue-500 text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/daily/update/${row.id}`}
          >
            Edit
          </Link>
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-blue-500 text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/daily/read/${row.id}`}
          >
            Read
          </Link>
        </div>
      ),
    },
  ];




  const [search, setSearch] = useState("")
  const [listOfDailyCheckList, setListOfDailyCheckList] = useState([]);
  const [filteredPersonnel, setFilteredPersonnel] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dailychecklist").then((response) => {
      setListOfDailyCheckList(response.data);
      setFilteredPersonnel(response.data)
    });
  }, []);

  useEffect(()=>{
    const result = listOfDailyCheckList.filter(person =>{
      return person.Daily_CIL_inspected_by.toLowerCase().match(search.toLowerCase());
    })

    setFilteredPersonnel(result)
  }, [search])





  return (



    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header
          category="Page"
          title="Checklists"
        />
        <NavLink
          to={`/checklistsmenu`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-8 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>

      </div>

      <DataTable
        columns={columns}
        data={filteredPersonnel}
        selectableRows
        fixedHeader
        fixedHeaderScrollHeight='400px'
        pagination
        title="Daily Checklist"
        actions={<button className={`w-20 h-5 text-12 bg-blue-500 text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
          Export</button>}
        subHeader
        subHeaderComponent={
          <input
            className='w-5'
            type='text'
            placeholder='Search Here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        }
      />


    </div>


  );
};
export default Checklists;