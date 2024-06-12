import React from 'react';
import './Home.css';
import hamburguer from '../../images/hamburguer.jpg'


const Home: React.FC = () => {
    window.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.fade-in');
        const window_height = window.innerHeight;

        elements.forEach(function (element) {
            const distance_to_top_of_element = element.getBoundingClientRect().top;
            const offset = 100;

            if (distance_to_top_of_element < window_height - offset) {
                element.classList.add('visible');
            }
        });
    });

    return (
        <div className='home'>
            <div className='wrapper'>
                <div className='text'>
                    <h1 className='slang'>PREPÁRATE PARA COMERTE LEÓN</h1>
                    <h2 className='cursive'>"LO MEJOR DE MADRID ES CUANDO VUELVO PA LEÓN"</h2>
                    <h3 className='cursive'>Catalina Grande Piñón Pequeño</h3>
                </div>
                <div className='image'>
                    <img className="hamburguer" src={hamburguer} alt='hamburguesa' />
                </div>
            </div>
            <div className='container'>
                <div className='brand'>
                    <h1>GASTROTIERRINA GASTROTIERRINA GASTROTIERRINA GASTROTIERRINA</h1>
                    <h1>GASTROTIERRINA GASTROTIERRINA GASTROTIERRINA </h1>
                </div>
            </div>
            <div className='howItStarted'>
                <h2 className=''>Cómo empezó todo</h2>
                <p>@Gastrotierrina nace en Julio del 2021.</p>
                <p>Cuándo empezamos en redes sociales teníamos el nombre de @CortandoElBacalao.</p>
                <p>El proyecto surge cuándo nos preguntan que cuál es nuestro hobbie y la respuesta siempre es la misma "COMER". </p>
                <p>Sentimos que en León faltaban cuentas que diesen a conocer los restaurantes de la provincia a los que llevamos acudiendo desde siempre y también los más nuevos.</p>
                <p>Ese mismo año recibimos la noticia de que nos mudamos a Barcelona por trabajo, al final el proyecto se paraliza y solo se retoma cuando venimos de visita.</p>
                <p>Agosto 2023 nos volvemos a vivir a León, retomamos el proyecto con más ganas que nunca y... nace @GastroTierrina</p>
                <p>El resto, como se suele decir, es historia.</p>
            </div>
            <h2 className='cursive'>CONOCE NUESTRO TOP 3 RESTAURANTES EN LEÓN CIUDAD</h2>
        </div>
    );
};

export default Home;