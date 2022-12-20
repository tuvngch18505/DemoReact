import './Add.css';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Courses from './Courses';

export default function EditCourse() {
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[id, setId] = useState("");
    
    let history = useNavigate();

    var index = Courses.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let i = Courses[index];
        i.name = name;
        i.description = description;
       

        history('/'); 
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setDescription(localStorage.getItem('description'));
        setId(localStorage.getItem('id'));
      }, [])

     
    
    return (
        <div className="container">

            <form className='form_layout'>
                <h2> Edit Course</h2>
                <br />
                <input type="text" name="course" className="form-control" value={name} placeholder="Enter name of Course" onChange={(e) => setName(e.target.value)} required autoFocus/>
                <br />
                <input type="text" name="description" className="form-control" value={description} placeholder="Enter description of Course" onChange={(e) => setDescription(e.target.value)} required autoFocus/>
                <br />
                <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Update</button>
            </form>

        </div>
    )
}
