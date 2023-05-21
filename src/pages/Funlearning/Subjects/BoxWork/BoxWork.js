import classNames from "classnames/bind";
import style from './BoxWork.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const st = classNames.bind(style)

function BoxWork({ thumbnail, title, desc, customeBox, to }) {
    return ( 
        <div className={st('box-work', customeBox)}>
            <Link to={to} className={st('thumbnail-link')}>
                <div className={st('thumbnail')}>
                    <img alt="thumbnail" src={thumbnail} />
                </div>
            </Link>

            <div className={st('info-work')}>
                <div className={st('title')}>
                    <h3>
                        {title}
                    </h3>

                    <span>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                </div>

                <div className={st('descriptrion')}>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BoxWork;