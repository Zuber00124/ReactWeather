var React = require('react');

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a Weather application built pn React.
        I have built this for the Complete React Web App Developer Course
      </p>
      <p>
        Here are some of the tools I used:
      </p>  
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

    </div>
  );
};

module.exports = About;
