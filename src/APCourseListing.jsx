export default function APCourseListing(props) {
  let course = props.details;

  return (
    <tr className="centered">
      <td>{course.test}</td>
      <td>{course.equivalency}</td>
      <td>{course.credits}</td>
    </tr>
  );
}
