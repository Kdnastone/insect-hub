// Estilos necesarios de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Componentes principales de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

//Se importan las imágenes que se descargan en assets/50
import cima01 from '../../assets/images/cima01.jpg';
import cima02 from '../../assets/images/cima02.jpg';
import cima03 from '../../assets/images/cima03.jpg';
import cima04 from '../../assets/images/cima04.jpg';
import cima05 from '../../assets/images/cima05.jpg';
import cima06 from '../../assets/images/cima06.jpg';
import cima07 from '../../assets/images/cima07.jpg';

// Función utilitaria para mezclar aleatoriamente las imágenes
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Header = () => {
  // Se guardan todas las imágenes importadas
  const allImages = [
    cima01, cima02, cima03, cima04, cima05, cima06, cima07
  ];

  // Se seleccionan 5 imágenes aleatorias
  const images = shuffleArray(allImages).slice(0, 7);

  return (
    <div className="container mx-auto px-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.5}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-[300px] h-[225px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[337px] flex justify-center items-center overflow-hidden rounded-xl shadow-lg border border-white bg-gray-100 mx-auto">
              <img
                src={img}
                alt={`rima_${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};