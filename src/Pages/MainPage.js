import React, { useState, useEffect } from 'react';
import './Pages.css';

function MainPage() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        
        "",
        "",
        ""


    ];

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function plusSlides(n) {
        const newIndex = slideIndex + n;
        if (newIndex < 0) {
            setSlideIndex(slides.length - 1);
        } else if (newIndex >= slides.length) {
            setSlideIndex(0);
        } else {
            setSlideIndex(newIndex);
        }
    }

    function showSlides(index) {
        const slideElements = document.querySelectorAll('.slides');

        slideElements.forEach((slide) => {
            slide.style.display = 'none';
        });

        slideElements[index].style.display = 'block';
    }

    return (
        <>
            <div className='bannerHome'></div>

            <div className='containerWelcome'>
                <div className='containerText'>
                    <div className='cntnTextHeader fontTitle'>Sobre a Equipe</div>
                    <div className='cntnTextBody fontText'>
                        A equipe SESI Reboot's representa a escola SESI<br/> CE-099 de Santa Bárbara d'Oeste, SP,
                        em competições de robótica, incluindo a First Lego League (FLL) e a Olimpíada Brasileira de Robótica (OBR).
                        Nossas conquistas incluem várias premiações e projetos inovadores.
                        Siga a gente no Instagram para acompanhar nossos treinos e projetos emocionantes!
                    </div>
                </div>

                <div className='containerSlider'>
                    {slides.map((slide, index) => (
                        <div key={index} className={`slides fade ${index === slideIndex ? 'active' : ''}`}>
                            {slide}
                        </div>
                    ))}

                    <div style={{ textAlign: 'center' }}>
                        {slides.map((_, index) => (
                            <span key={index} className={`dot ${index === slideIndex ? 'active' : ''}`} onClick={() => setSlideIndex(index)}></span>
                        ))}
                    </div>
                    
                    <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                    <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
                </div>
            </div>
        </>
    );
}

export default MainPage;
