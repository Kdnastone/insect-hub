// Estilos necesarios de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Componentes principales de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

//Se importan las imágenes que se descargan en assets/50
import rima_01 from '../../assets/50/rima01.jpg';
import rima_02 from '../../assets/50/rima02.jpg';
import rima_03 from '../../assets/50/rima03.jpg';
import rima_04 from '../../assets/50/rima04.jpg';
import rima_05 from '../../assets/50/rima05.jpg';
import rima_06 from '../../assets/50/rima06.jpg';
import rima_07 from '../../assets/50/rima07.jpg';
import rima_08 from '../../assets/50/rima08.jpg';
import rima_09 from '../../assets/50/rima09.jpg';
import rima_10 from '../../assets/50/rima10.jpg';
import rima_11 from '../../assets/50/rima11.jpg';
import rima_12 from '../../assets/50/rima12.jpg';
import rima_13 from '../../assets/50/rima13.jpg';
import rima_14 from '../../assets/50/rima14.jpg';
import rima_15 from '../../assets/50/rima15.jpg';
{/*
import rima_16 from '../../assets/50/rima16.jpg';
import rima_17 from '../../assets/50/rima17.jpg';
import rima_18 from '../../assets/50/rima18.jpg';
import rima_19 from '../../assets/50/rima19.jpg';
import rima_20 from '../../assets/50/rima20.jpg';
import rima_21 from '../../assets/50/rima21.jpg';
import rima_22 from '../../assets/50/rima22.jpg';
import rima_23 from '../../assets/50/rima23.jpg';
import rima_24 from '../../assets/50/rima24.jpg';
import rima_25 from '../../assets/50/rima25.jpg';
import rima_26 from '../../assets/50/rima26.jpg';
import rima_27 from '../../assets/50/rima27.jpg';
import rima_28 from '../../assets/50/rima28.jpg';
import rima_29 from '../../assets/50/rima29.jpg';
import rima_30 from '../../assets/50/rima30.jpg';
import rima_31 from '../../assets/50/rima31.jpg';
import rima_32 from '../../assets/50/rima32.jpg';
import rima_33 from '../../assets/50/rima33.jpg';
import rima_34 from '../../assets/50/rima34.jpg';
import rima_35 from '../../assets/50/rima35.jpg';
import rima_36 from '../../assets/50/rima36.jpg';
import rima_37 from '../../assets/50/rima37.jpg';
import rima_38 from '../../assets/50/rima38.jpg';
import rima_39 from '../../assets/50/rima39.jpg';
import rima_40 from '../../assets/50/rima40.jpg';
import rima_41 from '../../assets/50/rima41.jpg';
import rima_42 from '../../assets/50/rima42.jpg';
import rima_43 from '../../assets/50/rima43.jpg';
import rima_44 from '../../assets/50/rima44.jpg';
import rima_45 from '../../assets/50/rima45.jpg';
import rima_46 from '../../assets/50/rima46.jpg';
import rima_47 from '../../assets/50/rima47.jpg';
import rima_48 from '../../assets/50/rima48.jpg';
import rima_49 from '../../assets/50/rima49.jpg';
import rima_50 from '../../assets/50/rima50.jpg';

*/}

// Función utilitaria para mezclar aleatoriamente las imágenes
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Header = () => {
  // Se guardan todas las imágenes importadas
  const allImages = [
    rima_01, rima_02, rima_03, rima_04, rima_05,
    rima_06, rima_07, rima_08, rima_09, rima_10,
    rima_11, rima_12, rima_13, rima_14, rima_15,
  ];

  // Se seleccionan 5 imágenes aleatorias
  const images = shuffleArray(allImages).slice(0, 5);

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