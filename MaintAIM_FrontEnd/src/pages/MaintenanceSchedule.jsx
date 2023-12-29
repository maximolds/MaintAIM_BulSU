import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, Month, Agenda, Inject, Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';



import {
  KanbanComponent, ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-kanban';

import { useStateContext } from '../contexts/ContextProvider';


import {
  scheduleData, kanbanData,
  kanbanGrid
} from '../data/dummy';
import { Header } from '../components';

const MaintenanceSchedule = () => {

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const [listOfMaintenanceScheduler, setListOfMaintenanceScheduler] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/maintenancehistory").then((response) => {
      setListOfMaintenanceScheduler(response.data);
    });
  }, []);

  return (


    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950 dark:text-white'>
      <Header
        style={{
          color: 'black'
        }}
        darkStyle={{
          color: 'white'
        }}
        category='App'
        title="Maintenance Schedule"
      />
      <div className='m-2 md:m-10 mt-2 p-2 md:p-10 bg-white
    rounded-3xl flex-1 md:flex shadow-xl justify-between flex-col flex-wrap'>
        <div className={`flex flex-wrap  border-black  
            ${activeMenu ? 'justify-center' : ' justify-center md:w[40%] items-center'}`}>
          {/* Erase eventsettings and
          selectedDate when syncing with a database */}
          <ScheduleComponent
            height="500px"
            eventSettings={{ dataSource: listOfMaintenanceScheduler }}
            

          >
            <Inject services={[Day, Week, WorkWeek,
              Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>


        </div>

        <div className='mt-4'>
          <ScheduleComponent
            height="300px"
            currentView='Agenda'
            eventSettings={{ dataSource: scheduleData }}
            selectedDate={new Date(2021, 0, 10)}
            showHeaderBar={false}

          >
            <Inject services={[Day, Week, WorkWeek,
              Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>

      </div>



    </div>
  )
}

export default MaintenanceSchedule