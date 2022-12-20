import './CRUD.css';
// import AddCourse from './AddCourse'
// import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { Fragment } from 'react'
import Courses from './Courses';




export default function Home() {
    let count = 1;
    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Courses.map(function (e) {
            return e.id;
        }).indexOf(id);

        Courses.splice(index, 1);

        history('/');

    }

    const handleEdit = (id, name, description) =>{
        localStorage.setItem('name', name);
        localStorage.setItem('description', description);
        localStorage.setItem('id', id);
    }

    return (
        <Fragment>
            <div className="container container_table">
                <button className='btn btn-info btn_layout'>
                    <Link to="/addcourse" > Create post </Link>
                </button>
                <table className="table table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Courses && Courses.length > 0
                                ?
                                Courses.map((params) => (

                                    <tr>
                                        <th scope="row">{count++}</th>
                                        <td>{params.name}</td>
                                        <td>{params.description}</td>
                                        <td>
                                            <Link to={`/editcourse`} >
                                                <button className="btn btn-primary" onClick={() => handleEdit(params.id, params.name, params.description)}>Edit</button>
                                            </Link>
                                            |
                                            <button className="btn btn-danger" onClick={() => handleDelete(params.id)}>Delete</button>
                                        </td>
                                    </tr>


                                ))
                                : " No Data"
                        }
                    </tbody>

                </table>
            </div>

            {/* <Routes>
                <Route path="/addcourse" element={<AddCourse />} />
            </Routes> */}
        </Fragment>
    )
}
