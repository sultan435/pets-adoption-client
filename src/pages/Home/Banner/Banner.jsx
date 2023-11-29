import bannerImg1 from '../../../assets/banner-1.jpg'
import bannerImg2 from '../../../assets/banner-2.jpg'
import bannerImg4 from '../../../assets/banner-4.jpg'
import bannerImg3 from '../../../assets/banner-3.jpg'
import bannerImg7 from '../../../assets/banner-7.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Container from '../../../components/Ui/Container/Container';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div className='pt-36 pb-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{ backgroundImage: `url(${bannerImg1})` }}>
            <Container>
              <div className="h-[100vh] flex items-center">
                <div className="text-left text-neutral-content ">
                  <div className="">
                    <h1 className="text-4xl lg:text-5xl text-white font-bold">You can <span className='text-orange'>change</span> her fate.</h1>
                    <p className="my-10 text-white font-bold text-xl">Make an urgent donation to help animals in need</p>
                    <button className="py-4 text-xl text-black bg-orange px-10 hover:bg-violet transition  font-semibold rounded-xl">Donation Now</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{ backgroundImage: `url(${bannerImg2})` }}>
            <Container>
              <div className="h-[100vh] flex items-center">
                <div className="text-left text-neutral-content ">
                  <div className="">
                  <h1 className="text-4xl lg:text-5xl text-white font-bold">You can <span className='text-orange'>change</span> her fate.</h1>
                    <p className="my-10 text-white font-bold text-xl">Make an urgent donation to help animals in need</p>
                    <button className="py-3 text-xl text-black bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">Donation Now</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{ backgroundImage: `url(${bannerImg7})` }}>
            <Container>
              <div className="h-[100vh] flex items-center">
                <div className="text-left text-neutral-content ">
                  <div className="">
                  <h1 className="text-4xl lg:text-5xl text-white font-bold">You can <span className='text-orange'>change</span> her fate.</h1>
                    <p className="my-10 text-white font-bold text-xl">Make an urgent donation to help animals in need</p>
                    <button className="py-3 text-black text-xl bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">Donation Now</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{ backgroundImage: `url(${bannerImg4})` }}>
            <Container>
              <div className="h-[100vh] flex items-center">
                <div className="text-left text-neutral-content ">
                  <div className="">
                  <h1 className="text-4xl lg:text-5xl text-white font-bold">You can <span className='text-orange'>change</span> her fate.</h1>
                    <p className="my-10 text-white font-bold text-xl">Make an urgent donation to help animals in need</p>
                    <button className="py-3 text-xl text-black bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">Donation Now</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{ backgroundImage: `url(${bannerImg3})` }}>
            <Container>
              <div className="h-[100vh] flex items-center">
                <div className="text-left text-neutral-content ">
                  <div className="">
                  <h1 className="text-4xl lg:text-5xl text-white font-bold">You can <span className='text-orange'>change</span> her fate.</h1>
                    <p className="my-10 text-white font-bold text-xl">Make an urgent donation to help animals in need</p>
                    <button className="py-3 text-xl text-black bg-orange px-10 hover:bg-orange transition font-semibold rounded-xl">Donation Now</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
       </Swiper>
    </div>
  );
};

export default Banner;