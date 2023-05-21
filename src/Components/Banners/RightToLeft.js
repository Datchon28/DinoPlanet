import classNames from "classnames/bind";
import style from './Banners.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const st = classNames.bind(style)

function RightToLeft({ image, title, slogan, desc, bgcolor }) {
    return (
        <div className={st('right-to-left', bgcolor)} >
            <div className={st('control')}>
                <span><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
            </div>
            
            <div className={st('box')} data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000"  >
                <div className={st('content-left')}>
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

                <div className={st('content-right')}>
                    <div className={st('image-box')}>
                        {image}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RightToLeft;