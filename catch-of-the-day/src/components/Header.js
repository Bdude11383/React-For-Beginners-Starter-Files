import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header classname="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">Of</span>
              <span classname="the">The</span>
            </span>
            Day
          </h1>
          <h3 classname="tagline">
            <span>Fresh Daily</span>
          </h3>
        </header>
      </>
    );
  }
}

export default Header;
