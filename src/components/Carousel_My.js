import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

export default function Carousel_My() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link === '/login') {
      navigate('/login');
    } else if (link === '#home') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const offset = 100;
        const topPos = homeSection.offsetTop - offset;

        // Smooth scroll to the adjusted position
        window.scrollTo({
          top: topPos,
          behavior: 'smooth',
        });
      } else {
        console.error('Home section not found!');
      }
    } else {
      window.location.href = link;
    }
  };

  const heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Unlock the Power of Mainframe Efficiency',
      description: 'Log in using your credentials to manage Generation Data Groups (GDGs) like never before. Simplify complex mainframe operations, archive transaction logs seamlessly, and monitor data trends with ease.',
      link: '/login',
      l: 'Login', // Added missing comma and fixed syntax
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'Know About Our Application',
      description: 'Our application simplifies GDG management on the mainframe. Create, update, and archive GDGs effortlessly while tracking trends with a modern interface. Get the best of reliability and usability—streamline tasks and boost productivity. Click to learn more!',
      link: '#home',
      l: 'Click Here',
    },
  ];

  return (
    <section className="home-page">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                src={hero.image}
                alt={'slide ' + hero.id}
                style={{ filter: 'brightness(0.5) blur(2px)' }}
              />
              <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-10">
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a
                  className="btn btn-primary"
                  onClick={() => handleClick(hero.link)}
                >
                  {hero.l}
                  <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}