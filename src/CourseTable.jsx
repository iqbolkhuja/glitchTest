import { useContext } from "react";
import { LevelContext } from "./LevelContext";

import CourseListing from "./CourseListing";

export default function CourseTable(props) {
  let context = useContext(LevelContext);
  let courseList = context.courseList;
  let selectedList = context.selectedList;
  let currentInstitution = context.currentInstitution;

  let isSelected = props.isSelected;
  let specificCourses;
  if (!isSelected) {
    specificCourses = courseList.filter(
      (course) => course.rewarding_institution === currentInstitution
    );
  } else {
    specificCourses = selectedList;
  }

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>Rewarding Institution</th>
          <th>Course Name</th>
          <th>Centre Equivalency</th>
          <th>Centre Credits</th>
          <th>{isSelected ? "Remove from list?" : "Add to list?"}</th>
        </tr>
      </thead>
      <tbody id="courses-list">
        {specificCourses.map((course) => (
          <CourseListing key={course.course_workNumber} details={course} />
        ))}
      </tbody>
    </table>
  );
}
