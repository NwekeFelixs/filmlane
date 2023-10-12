import React from 'react';
import { IoCalendarOutline, IoPlay, IoTimeOutline,  } from 'react-icons/io5';
import '../css/style.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Filmlane</p>
          <h1 className="h1 hero-title">
            Unlimited <strong>Movie</strong>, TVs Shows, & More.
          </h1>
          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">PG 18</div>
              <div className="badge badge-outline">HD</div>
            </div>
            <div className="ganre-wrapper">
              <a href="#">Romance,</a>
              <a href="#">Drama</a>
            </div>
            <div className="date-time">
              <div>
                <IoCalendarOutline />
                <time dateTime="2022">2022</time>
              </div>
              <div>
                <IoTimeOutline />
                <time dateTime="PT128M">128 min</time>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">
            <IoPlay/>
            <span>Watch now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
