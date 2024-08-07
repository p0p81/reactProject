import './Home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {

    const slidingSettings = {
        dots: true, 
        infinite: true, 
        speed: 1500, 
        slidesToShow: 2, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 5000, 
      };
      
    return(
        <div className='homeBox'>
    <h1>Renovate, Innovate, Create - <br /> Your Home, Our Fate!</h1>
    <p>Join our community today and take the first step towards connecting with the best professionals or reaching more clients.</p>
        <div className='carousel-container'>
            <Slider {...slidingSettings}>
                <div>
                <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/nero-and-nero-electrician-business-card-template-f3txic417f76e7.webp" alt="Slide 1" className="slide-image" />
                </div>
                <div>
                <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/deep-fir-electrician-business-card-template-foo1rd6f68fa76.webp" alt="Slide 2" className="slide-image" />
                </div>
                <div>
                <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-electrician-business-card-template-clyhke65cbfb22.webp" alt="Slide 3" className="slide-image" />
                </div>
            </Slider>
        </div>
       
    </div>
    )

}
