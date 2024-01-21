import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";

const Hero = () => {
    const [sliderRef] = useKeenSlider();
    return (
        <div ref={sliderRef} className="keen-slider h-[400px]">
            <div className="keen-slider__slide">
                <img className="w-full" src={b1} alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className="w-full" src={b2} alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className="w-full" src={b3} alt="" />
            </div>
            <div className="keen-slider__slide">
                <img className="w-full" src={b4} alt="" />
            </div>
        </div>
    );
};

export default Hero;
