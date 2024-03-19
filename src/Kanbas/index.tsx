import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { courses } from "./Database";

function Kanbas() {
  const [courseList, setCourses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "webdev.jpg", description: "New Description"
  });
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    console.log(newCourse);
    setCourses([...courseList, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courseList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(courseList.map((c) => c._id === course._id ? course : c))
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courseList}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />        </Routes>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;