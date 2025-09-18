import React from "react";
import "./globals.css";
import "./styleguide.css";
import "./style.css";
import Map from 'C:/Users/Harsha Prasad/SIHack/my-app/src/MapComponent'

const CitizenDashboard = () => {
  return (
    <div className="citizen-dashboard">
      <div className="footer">
        <div className="div">
          <div className="frame">
            <p className="skip-to-main-content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Content managed by&nbsp;&nbsp;Ministry of Tribal Affairs, Govt. of India
            </p>
            <img className="vector" src="img/vector-2.svg" />
            <p className="text-wrapper">Website design and development by VanSetu</p>
          </div>
        </div>
      </div>

      <div className="header">
        <p className="link-skip-to-main">27 Oct 2023 | Fri | 04:36:21 PM</p>
        <div className="frame">
          <div className="text-wrapper">Skip to main content</div>
          <img className="vector" src="img/image.svg" />
          <div className="text-wrapper">Screen Reader Access</div>
          <div className="text-wrapper">Text Size</div>
          <div className="frame-2">
            <div className="vector-wrapper"><img className="img" src="img/vector-1.svg" /></div>
            <div className="text-wrapper">A</div>
            <div className="frame-3"></div>
          </div>
          <div className="frame-4">
            <div className="rectangle"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
          </div>
          <p className="span-wrapper">
            <span className="span"><br />हिन्दी में</span>
          </p>
        </div>
      </div>

      <div className="header-2">
        <div className="navbar">
          <a href="/">Home</a>
          <div className="text-wrapper-3">Dashboard</div>
          <div className="text-wrapper-2">About</div>
          <div className="text-wrapper-2">Act &amp; Rule</div>
          <div className="text-wrapper-2">Contact</div>
          <div className="text-wrapper-2">Feedback</div>
          <div className="text-wrapper-2">Meri Yojna Book</div>
        </div>
        <div className="text-wrapper-4">Public Grievances</div>
        <div className="text-wrapper-5">Logout</div>
        <div className="frame-5">
          <img
            className="ashok"
            src="ashok1.jpeg"
            alt="Profile"
          />
          <div className="logo">
            <div className="div-wrapper">
              <div className="text-wrapper-6">Ministry of Tribal Affairs</div>
            </div>
          </div>
        </div>
      </div>

      {/* CITIZEN INFORMATION section */}
      <div className="citizen">
        <div className="text-wrapper-7">CITIZEN INFORMATION</div>
        <div className="frame-6"><div className="text-wrapper-8">Name</div></div>
        <div className="frame-7"><div className="text-wrapper-9">Community</div></div>
        <div className="frame-8"><div className="text-wrapper-10">Land Size</div></div>
        <div className="frame-9"><div className="text-wrapper-11">Village</div></div>
        <div className="frame-10"><div className="text-wrapper-12">Taluka</div></div>
        <div className="frame-11"><div className="text-wrapper-11">District</div></div>
        <div className="frame-12"><div className="text-wrapper-13">State</div></div>
        <div className="frame-13"><div className="text-wrapper-14">Document ID</div></div>
        <div className="frame-14"><div className="text-wrapper-15">Claim Type</div></div>
        <div className="frame-15"><div className="text-wrapper-16">Current Status</div></div>
        <div className="frame-16"><div className="text-wrapper-17">Name</div></div>
        <div className="frame-17"><div className="text-wrapper-18">Community</div></div>
        <div className="frame-18"><div className="text-wrapper-19">Land Size</div></div>
        <div className="frame-19"><div className="text-wrapper-20">Village</div></div>
        <div className="frame-20"><div className="text-wrapper-21">Taluka</div></div>
        <div className="frame-21"><div className="text-wrapper-22">District</div></div>
        <div className="frame-22"><div className="text-wrapper-23">State</div></div>
        <div className="frame-23"><div className="text-wrapper-24">Document ID</div></div>
        <div className="frame-24"><div className="text-wrapper-25">Claim Type</div></div>
        <div className="frame-25"><div className="text-wrapper-26">Current Status</div></div>
      </div>

      <div className="map"><Map></Map></div>

      <div className="implementation">
        <div className="text-wrapper-27">CURRENT STATUS OF IMPLEMENTATION</div>
        <div className="claim-received"><div className="text-wrapper-28">Total claims received</div></div>
        <div className="claim-approved"><div className="text-wrapper-28">Total claims approved</div></div>
        <div className="claim-rejected"><div className="text-wrapper-28">Total claims rejected</div></div>
        <div className="claim-received-data"></div>
        <div className="claim-approved-data"></div>
        <div className="claim-rejected-data"></div>
      </div>

      <div className="searching">
        <div className="searching-background"><img className="star" src="img/star.svg" /></div>
        <button className="button">
          <div className="text-wrapper-29">Search</div>
        </button>
        <div className="searching-icon">
          <div className="search-line"><img className="vector-2" src="img/vector-3.svg" /></div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
