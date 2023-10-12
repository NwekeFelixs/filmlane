import React from 'react';
import { IoStar, IoTimeOutline,  } from 'react-icons/io5';
import '../css/style.css';
import movie1 from '../img/movie-1.png'
import movie2 from '../img/movie-2.png'
import movie3 from '../img/movie-3.png'
import movie4 from '../img/movie-4.png'
import movie5 from '../img/movie-5.png'
import movie6 from '../img/movie-6.png'
import movie7 from '../img/movie-7.png'
import movie8 from '../img/movie-8.png'

const TopRated = () => {
  const topRatedMovies = [
    {
      title: "Sonic the Hedgehog 2",
      year: "2022",
      quality: "2K",
      duration: "122 min",
      rating: "7.8",
      image: movie1,
    },
    {
      title: "Morbius",
      year: "2022",
      quality: "HD",
      duration: "104 min",
      rating: "5.9",
      image: movie2,
    },
    {
      title: "The Adam Project",
      year: "2022",
      quality: "4K",
      duration: "106 min",
      rating: "7.0",
      image: movie3,
    },
    {
      title: "Free Guy",
      year: "2021",
      quality: "4K",
      duration: "115 min",
      rating: "7.7",
      image: movie4,
    },
    {
      title: "The Batman",
      year: "2022",
      quality: "4K",
      duration: "176 min",
      rating: "7.9",
      image: movie5,
    },
    {
      title: "Uncharted",
      year: "2022",
      quality: "HD",
      duration: "116 min",
      rating: "7.0",
      image: movie6,
    },
    {
      title: "Death on the Nile",
      year: "2022",
      quality: "2K",
      duration: "127 min",
      rating: "6.5",
      image: movie7,
    },
    {
      title: "The King's Man",
      year: "2021",
      quality: "HD",
      duration: "131 min",
      rating: "7.0",
      image: movie8,
    },
  ];

  return (
    <section className="top-rated">
      <div className="container">
        <p className="section-subtitle">Online Streaming</p>
        <h2 className="h2 section-title">Top Rated Movies</h2>
        <ul className="movies-list">
          {topRatedMovies.map((movie, index) => (
            <li key={index}>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src={movie.image} alt={`${movie.title} movie poster`} />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">{movie.title}</h3>
                  </a>
                  <time dateTime={movie.year}>{movie.year}</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">{movie.quality}</div>
                  <div className="duration">
                    <IoTimeOutline/>
                    <time dateTime={movie.duration}>{movie.duration}</time>
                  </div>
                  <div className="rating">
                    <IoStar/>
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
}

export default TopRated;
