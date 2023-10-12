import React from 'react';
import { IoStar, IoTimeOutline,  } from 'react-icons/io5';
import '../css/style.css';
import upcomingImg1 from '../img/upcoming-1.png'
import upcomingImg2 from '../img/upcoming-2.png'
import upcomingImg3 from '../img/upcoming-3.png'
import upcomingImg4 from '../img/upcoming-4.png'

const upcomingMovies = [
    {
      title: "The Northman",
      imageSrc: upcomingImg1,
      detailsLink: "./movie-details.html",
      year: "2022",
      badge: "HD",
      duration: "137 min",
      rating: "8.5",
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      imageSrc: upcomingImg2,
      detailsLink: "./movie-details.html",
      year: "2022",
      badge: "4K",
      duration: "126 min",
      rating: "NR",
    },
    {
      title: "Memory",
      imageSrc: upcomingImg3,
      detailsLink: "./movie-details.html",
      year: "2022",
      badge: "2K",
      duration: "N/A",
      rating: "NR",
    },
    {
      title: "The Unbearable Weight of Massive Talent",
      imageSrc: upcomingImg4,
      detailsLink: "./movie-details.html",
      year: "2022",
      badge: "HD",
      duration: "107 min",
      rating: "NR",
    },
  ];
  
  const Upcoming = () => {
    return (
      <section className="upcoming">
        <div className="container">
          {/* ... Your existing JSX for the section ... */}
          <ul className="movies-list has-scrollbar">
            {upcomingMovies.map((movie, index) => (
              <li key={index}>
                <div className="movie-card">
                  <a href={movie.detailsLink}>
                    <figure className="card-banner">
                      <img src={movie.imageSrc} alt={`${movie.title} movie poster`} />
                    </figure>
                  </a>
                  <div className="title-wrapper">
                    <a href={movie.detailsLink}>
                      <h3 className="card-title">{movie.title}</h3>
                    </a>
                    <time dateTime={movie.year}>{movie.year}</time>
                  </div>
                  <div className="card-meta">
                    <div className="badge badge-outline">{movie.badge}</div>
                    <div className="duration">
                      <IoTimeOutline />
                      <time dateTime={`PT${movie.duration}`}>{movie.duration}</time>
                    </div>
                    <div className="rating">
                      <IoStar />
                      <data>{movie.rating}</data>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Upcoming;
  