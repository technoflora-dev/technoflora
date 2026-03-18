import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: "Transform Your Digital Presence",
      description: "Custom solutions tailored to accelerate your business growth in the digital world",
      badge: "🚀 Innovative Solutions",
      image: "/images/slide-analytics.jpg",
      overlay: "linear-gradient(90deg, rgba(2, 20, 15, 0.88) 0%, rgba(2, 20, 15, 0.55) 50%, rgba(0,0,0,0.15) 100%)",
      ctaText: "Start Your Project",
      ctaLink: "/contact"
    },
    {
      title: "Innovation That Drives Results",
      description: "Cutting-edge technology delivering measurable business outcomes for lasting success",
      badge: "💡 Latest Technology",
      image: "/images/slide-technology.jpg",
      overlay: "linear-gradient(90deg, rgba(3, 12, 35, 0.90) 0%, rgba(3, 12, 35, 0.55) 50%, rgba(0,0,0,0.12) 100%)",
      ctaText: "Explore Services",
      ctaLink: "/services"
    },
    {
      title: "Expert Team, Exceptional Solutions",
      description: "20+ skilled specialists bringing your vision to life with passion and precision",
      badge: "👥 Experienced Team",
      image: "/images/slide-team.jpg",
      overlay: "linear-gradient(90deg, rgba(15, 5, 25, 0.88) 0%, rgba(15, 5, 25, 0.50) 50%, rgba(0,0,0,0.10) 100%)",
      ctaText: "Meet the Team",
      ctaLink: "/about"
    },
    {
      title: "24/7 Support & Reliability",
      description: "Your success is our commitment — always available, always reliable, always exceeding expectations",
      badge: "⚡ Always Available",
      image: "/images/slide-developer.jpg",
      overlay: "linear-gradient(90deg, rgba(2, 20, 15, 0.88) 0%, rgba(2, 20, 15, 0.55) 50%, rgba(0,0,0,0.12) 100%)",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    },
    {
      title: "Scalable Cloud Solutions",
      description: "Migrate, build, and scale with secure cloud infrastructure designed to grow with your business",
      badge: "☁️ Cloud & DevOps",
      image: "/images/slide-cloud.jpg",
      overlay: "linear-gradient(90deg, rgba(5, 10, 30, 0.88) 0%, rgba(5, 10, 30, 0.50) 50%, rgba(0,0,0,0.10) 100%)",
      ctaText: "Learn More",
      ctaLink: "/services"
    },
    {
      title: "Beautiful Designs That Convert",
      description: "UI/UX crafted to delight your users and turn visitors into loyal customers",
      badge: "🎨 Design & Branding",
      image: "/images/slide-design.jpg",
      overlay: "linear-gradient(90deg, rgba(20, 5, 15, 0.88) 0%, rgba(20, 5, 15, 0.50) 50%, rgba(0,0,0,0.10) 100%)",
      ctaText: "See Our Work",
      ctaLink: "/services"
    }
  ];

  const SLIDE_DURATION = 6000;

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="carousel-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="carousel-overlay" style={{ background: slide.overlay }}></div>
            <div className="carousel-content">
              <span className="carousel-badge">{slide.badge}</span>
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-description">{slide.description}</p>
              <div className="carousel-actions">
                <Link to={slide.ctaLink} className="carousel-cta-btn">
                  {slide.ctaText}
                  <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <div className="carousel-bottom-bar">
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-counter">
          <span className="carousel-counter-current">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="carousel-counter-separator">/</span>
          <span className="carousel-counter-total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="carousel-progress">
        <div className="carousel-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Carousel;
