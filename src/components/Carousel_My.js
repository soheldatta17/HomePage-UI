import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

export default function Carousel_My() {
  const navigate = useNavigate();

  // Define the handleClick function
  const handleClick = (link) => {
    if (link === '/login') {
      navigate('/login');
    } else {
      window.location.href = link; // Redirect to external links
    }
  };

  const heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'Know About Our Application',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: '/login' // Set the path here
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    }
  ];

  return (
    <section id="home" className="home-page">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                src={hero.image}
                alt={"slide " + hero.id}
                style={{ filter: "brightness(0.5) blur(2px)" }}
              />
              <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-10">
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a
                  className="btn btn-primary"
                  onClick={() => handleClick(hero.link)}
                >
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
