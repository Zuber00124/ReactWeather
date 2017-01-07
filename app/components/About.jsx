var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather application built pn React.
        I have built this for the Complete React Web App Developer Course
      </p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>-- This was
              the Javascript franework used
          </li>
          <li>
              <a href="https://onenweathermap.org">OpenWeatherMap</a>-- I used
                Open weathermap Api to search for Weather data by city name
          </li>
      </ul>
      </p>
    </div>
  );
};

module.exports = About;
