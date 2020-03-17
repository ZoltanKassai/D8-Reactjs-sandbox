function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Max" age="28" />
    <Person name="Zoltan" age="48" />
  </div>
);

ReactDOM.render(app,
  document.querySelector('#react-app')
);
