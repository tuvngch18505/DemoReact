import './Add.css';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Courses from './Courses';

export default function AddCourse() {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    
    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const count = Math.floor(Math.random() * 100); 
        const ids = count;

        let nameCoures = name, 
        descriptionCoures = description;

        Courses.push({id: ids, name: nameCoures, description: descriptionCoures})

        history(
            '/'
        );

    }

     
    
    return (
        <div className="container">

            <form className='form_layout'>
                <h2> Add Course</h2>
                <br />
                <input type="text" name="course" className="form-control" placeholder="Enter name of Course" onChange={(e) => setName(e.target.value)} required autoFocus/>
                <br />
                <input type="text" name="description" className="form-control" placeholder="Enter description of Course" onChange={(e) => setDescription(e.target.value)} required autoFocus/>
                <br />
                <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>

        </div>
    )
}
