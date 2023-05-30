import classNames from "classnames/bind";
import style from "./Subjects.scss";

import BannerFishing from "../../../Components/Banners/BannerFishing/BannerFishing";
import youtubeIcon from '../../../assets/img/youtube (3) 1.png'

const st = classNames.bind(style);

function Subjects({ background, title, description }) {
  return (
    <div className={st("subjects-wrapper")}>
      <div className={st("math")}>
        <h1>{title}</h1>
        <div className={st("math-sumary")}>
          <img className={st('math-work-1')} alt="math-work-1" src={background} />
          <img className={st('youtube-icon')} alt="youtube-icon" src={youtubeIcon} />
        </div>
        <p>
          At the request of the Ministry of Education and Training, the Dino
          Planet program provides childrenwith foundational knowledge with
          topics about Numbers, Compound Separation, Flat Shape, Cube,Time,
          Position, Rule, and Measure.<br></br>
          The first pre-primary education application for ages 3-6 to apply
          Professor Howard Gardner's theory of multiple intelligences and
          follows the new curriculum standards set by the Ministry of Education
          and Training. Providing 1,000 unique lessons, more than 10,000
          interesting learning activities and creative exercises for the
          all-round development of children.
        </p>

        <BannerFishing />
      </div>
    </div>
  );
}

export default Subjects;
