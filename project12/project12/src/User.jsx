function User(props) {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <h3>{props.data.city}</h3>

      <h4>Skills:</h4>
      <ul>
        {props.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;