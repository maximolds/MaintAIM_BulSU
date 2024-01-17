import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function DailyCILUpdate() {

    const [initialValues, setInitialValues] = useState({
        Daily_CIL_inspected_by: "",
    });


    const [listOfDailyCheckList, setListOfDailyCheckList] = useState([]);
    const { currentColor, activeMenu, setActiveMenu } = useStateContext();



    const [newDaily_CIL_inspected_by, setNewDaily_CIL_inspected_by] = useState('')

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const { data } = axios.get(`http://localhost:3001/dailychecklist/byId/${id}`).then((response) => {
            setListOfDailyCheckList(response.data)
            setInitialValues(response.data)
            console.log(response.data)
        });
    }, []);





    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(
            `http://localhost:3001/dailychecklist/update/byId/${id}`, initialValues).then(res => {
                console.log(res);
                navigate('/checklists')
            }).catch(err => console.log(err));
    }





    return (
        <div>


            <form id="checklistForm" onSubmit={onSubmit}>
                <h1 className='text-3xl font-extrabold dark:text-gray-200 mb-5'>Daily CIL</h1>

                <div className='flex mt-2'>
                    <button
                        type='submit'
                        //onClick={()=>navigate(-1)}
                        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                        style={{ color: currentColor }}
                    >
                        Update
                    </button>

                    <button
                        onClick={() => navigate('/checklists')}
                        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                        style={{ backgroundColor: currentColor }}
                    >
                        Back
                    </button>
                </div>


                <table>
                    <tbody>
                        <td>
                            <div class="textbox-container">
                                <label for="Daily_CIL_inspected_by">Inspected by:</label>
                                <input
                                    onChange={(e) => setInitialValues({ ...initialValues, Daily_CIL_inspected_by: e.target.value })}
                                    value={initialValues.Daily_CIL_inspected_by} type="text" id="Daily_CIL_inspected_by" name="Daily_CIL_inspected_by" />
                            </div>
                        </td>

                    </tbody></table>

            </form>





        </div>
    )
}

export default DailyCILUpdate