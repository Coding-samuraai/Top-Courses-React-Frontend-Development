import React from "react";
import Course from "./Course";

function Courses(props) {
  let keys = Object.keys(props.courseList);
  let selectedCourse = [];

  keys.forEach((key) => {
    if (props.tag === "All" || key === props.tag) {
      props.courseList[key].forEach((currCourse) => {
        selectedCourse.push(
          <Course key={currCourse.id} courseDetails={currCourse} />
        );
      });
    }
  });

  return selectedCourse;
}

export default Courses;
