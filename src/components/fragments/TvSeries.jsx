import React from 'react';
import { IoStar, IoTimeOutline,  } from 'react-icons/io5';
import '../css/style.css';
import series1 from '../img/series-1.png'
import series2 from '../img/series-2.png'
import series3 from '../img/series-3.png'
import series4 from '../img/series-4.png'

const TvSeries = () => {
  const tvSeries = [
    {
      title: "Moon Knight",
      year: "2022",
      quality: "2K",
      duration: "47 min",
      rating: "8.6",
      image: series1,
    },
    {
      title: "Halo",
      year: "2022",
      quality: "2K",
      duration: "59 min",
      rating: "8.8",
      image: series2,
    },
    {
      title: "Vikings: Valhalla",
      year: "2022",
      quality: "2K",
      duration: "51 min",
      rating: "8.3",
      image: series3,
    },
    {
      title: "Money Heist",
      year: "2017",
      quality: "4K",
      duration: "70 min",
      rating: "8.3",
      image: series4,
    },
  ];

  return (
    <section className="tv-series">
      <div className="container">
        <p className="section-subtitle">Best TV Series</p>
        <h2 className="h2 section-title">World Best TV Series</h2>
        <ul className="movies-list">
          {tvSeries.map((series, index) => (
            <li key={index}>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src={series.image} alt={`${series.title} series poster`} />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">{series.title}</h3>
                  </a>
                  <time dateTime={series.year}>{series.year}</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">{series.quality}</div>
                  <div className="duration">
                    <IoTimeOutline />
                    <time dateTime={series.duration}>{series.duration}</time>
                  </div>
                  <div className="rating">
                    <IoStar/>
                    <data>{series.rating}</data>
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

export default TvSeries;
