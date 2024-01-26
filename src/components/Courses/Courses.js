import axios from 'axios'
import { useState, useEffect } from 'react'
import './Courses.css';
import { getCourses } from '../../reducers/courseReducer';
import { useDispatch, useSelector } from 'react-redux';

function Courses() {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const courseState = useSelector(state => state.courseReducer)
    console.log(courseState, 13)

    useEffect(() => {
      /*  axios.get('http://localhost:5000/api/services')
            .then(res=> {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            }) */
        dispatch(getCourses());
    }, [dispatch])
    return(
        <div className='flex'>
            {
                courseState.courseData &&
                courseState.courseData.length > 0 ? 
                    courseState.courseData.map((serviceItem, serviceIndex ) => {
                        return (
                            <div className='cou-card'>
                                <div className='c-title'>{serviceItem?.title}</div>
                                <div className='c-desc'>{serviceItem?.description}</div>
                            </div>
                        )    
                    })
                
                    : 'No data found'
            }

        </div>
    )
}

export default Courses
