import classNames from "classnames/bind";
import style from './Banners.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const st = classNames.bind(style)

function LeftToRight({ image, title, slogan, desc, bgcolor }) {
    return (
        <div className={st('left-to-right', bgcolor)} >
            <div className={st('control')}>
                <span><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
            </div>
            
            <div className={st('box')} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" >
                <div className={st('content-left')}>
                    <div className={st('image-box')}>
                        {image}
                    </div>
                </div>

                <div className={st('content-right')}>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {slogan}
                    </p>

                    <span>
                        {desc}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LeftToRight;