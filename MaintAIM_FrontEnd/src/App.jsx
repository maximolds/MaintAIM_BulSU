import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, ShowComponents } from './components';
import {
  Dashboard, MaintenanceSchedule, MaintenanceHistory,
  Checklists, Documentation, Audits, Settings,
  UserGuide, Line, HistoryAddRecord, Login, Registration, ChecklistsMenu,
  DailyCIL, MonthlyPM13, MonthlyPM14, MonthlyPMUH, MonthlyPMUL, Profile, DailyCILUpdate, DailyCILRead
} from './pages';

import { useStateContext } from './contexts/ContextProvider';
import ProtectedRoutes from '../utils/ProtectedRoutes';


import './App.css'






const App = () => {
  const { activeMenu, themeSettings, setThemeSettings,
    currentColor, currentMode } = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <ShowComponents>
              <TooltipComponent content="Settings" position="Top">
                <button type='button'
                  className='text-3xl p-3 hover:drop-shadow-xl
              hover:bg-light-gray text-white'
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </ShowComponents>

          </div>
          {/* Sidebar */}
          <ShowComponents>
            {activeMenu ? (
              <div className='w-72 fixed sidebar
            dark:bg-secondary-dark-bg
            ' style={{ backgroundColor: currentColor }}>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
          </ShowComponents>





          {/* Navbar */}

          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
             ${activeMenu
              ? 'md:ml-72' :
              'flex-2'}`}>
            <ShowComponents>
              <div className='fixed md:static
              bg-main-bg dark:bg-main-dark-bg
              navbar w-full'>
                <Navbar />
              </div>
            </ShowComponents>



            <div>
              {themeSettings && <ThemeSettings />}



              <Routes>
                {/* Login and Registration */}
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />

                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/maintaim" element={<Dashboard />} />


                  {/* Pages */}
                  <Route path='/maintenance-schedule' element={<MaintenanceSchedule />} />
                  <Route path="/maintenance-history" element={<MaintenanceHistory />} />
                  <Route path="/checklists" element={<Checklists />} />
                  <Route path="/documenation" element={<Documentation />} />
                  <Route path="/audits" element={<Audits />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/user-guide" element={<UserGuide />} />

                  {/* Chechlist Actions */}

                  <Route path='/daily/read/:id' element={<DailyCILRead />} />
                  <Route path='/daily/update/:id' element={<DailyCILUpdate />} />

                  {/* Pages outside sidebar (History) */}

                  <Route path="/history-add-record" element={<HistoryAddRecord />} />

                  {/* Pages outside sidebar (History) */}

                  <Route path="/dailycil" element={<DailyCIL />} />
                  <Route path="/checklistsmenu" element={<ChecklistsMenu />} />

                  <Route path="/monthlypmuh" element={<MonthlyPMUH />} />
                  <Route path="/monthlypmul" element={<MonthlyPMUL />} />
                  <Route path="/monthlypm13" element={<MonthlyPM13 />} />
                  <Route path="/monthlypm14" element={<MonthlyPM14 />} />

                  {/* Charts */}
                  <Route path="/line" element={<Line />} />
                </Route>




                {/* Dashboard */}



              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App