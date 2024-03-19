import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import "./index.css";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button className="btn btn-danger btn-sm me-1" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-primary btn-sm me-1" onClick={updateCourse} >
                Update
            </button>


            <hr />
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", color: "navy", fontWeight: "bold", whiteSpace: "nowrap" }}>
                                        {course.name} </Link>
                                    <br />
                                    <p className="card-text" style={{ color: "gray", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.description}</p>
                                    <button className="btn btn-sm me-1" onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                        <FaPencilAlt aria-hidden="true" style={{color: "gray", height: "30px"}} /> {}

                                    </button>

                                    <button className="btn btn-sm me-1" onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                        <FaTrash aria-hidden="true" style={{color: "red", height: "30px"}}/> {}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;