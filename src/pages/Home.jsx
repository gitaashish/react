import "./home.css";
import bgImg from '../assets/images/home-banner-bg.jpg';
// import apparel from '../assets/images/apparel.jpg';
// import freight from '../assets/images/freight.jpg';
// import internationalfreight from '../assets/images/International-freight.jpg';
// import internationalperishables from '../assets/images/International-perishables.jpg';
import ladyImg from '../assets/images/lady-image.jpg';

// Import css files
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import HeroSec from '../component/HomePage/HeroSec';
import HomeWelcomSec from '../component/HomePage/HomeWelcomSec';
import HomeZigzagSec from '../component/HomePage/IcuProductionSec';
import ExploreSec from '../component/HomePage/ExploreSec';
import HomeZigzagData from '../api/HomeZigzagData.json';



const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (

        <>
           

            <HeroSec bgImg={bgImg} title={<>Building the Future of Business <span>With Diversified Verticals and a Unified Vision</span></>} />

            <HomeWelcomSec heading={<>Welcomte to <strong>ICU Production, Inc.</strong></>}>
                <p>We are an innovative, multifaceted business that brings you the highest quality products and the best customer service possible. We serve multiple segments and industry sectors with a commitment to excellence and a single objective: understanding the needs of today’s global market and supplying the products and services to meet them. </p>
            </HomeWelcomSec>

            <section className='hm_zigzag_sec'>
                <div className="sec-head-row">
                    <div className="container">
                        <span>ICU Production Currently Operates in the Following Sectors</span>
                    </div>
                </div>

                <div className="zigzag_row">

                    {HomeZigzagData.map((zigzagItem, index) => (
                        <HomeZigzagSec key={index} imgURL={zigzagItem.imgURL} learnmoreURL={zigzagItem.learnmoreURL}>
                            <h2>{zigzagItem.title}</h2>
                            <h3>{zigzagItem.subtitle}</h3>
                            {zigzagItem.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </HomeZigzagSec>
                    ))}

                </div>
            </section>

            <ExploreSec exploreImg={ladyImg}>
                <h2>Explore The <strong>ICU Production Range Today</strong></h2>
                <p>At ICU Production, the pillars of our business are quality, innovation, and service. Explore our services and discover how we aim to bring excellence and raise the standards in each of the industries and segments we operate. Contact our team for questions or inquiries.</p>
            </ExploreSec>

            
            <section className='slider-sec'>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>

            </section>


        </>

    )

}

export default Home;

