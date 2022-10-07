import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="top">
        <div className="Title">
          Demo Application in React, SASS and Firebase database.
        </div>
        <div className="desc">
          <strong>Dashboard: </strong> demonstrates the basic usages of React
          including useState, useEffect, useContext, react-router-dom and more.
        </div>
        <div className="desc">
          <strong>Users: </strong> demonstrates basic read and add operations
          with Firebase.
        </div>
        <div className="desc">
          This sample web app also imports various features from Material Icons,
          box-shadow generator, x-data-grid, charting and more.
        </div>
        <div className="desc">
          This web app is currently hosted and running in Azure and/or AWS
          cloud. The host is a FREE-Tier account so the rendering may be slow.
        </div>
      </div>
    </div>
  );
};

export default About;
