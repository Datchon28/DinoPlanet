import classNames from "classnames/bind";
import style from './BannerFishing.scss'

import LeftToRight from "../LeftToRight";
import banner from '../../../assets/img/Funlearning/BoxWork/Banner-math.png'
import bannerFooter from '../../../assets/img/Funlearning/BoxWork/Banner_math_footer.png'


const st = classNames.bind(style)

function BannerFishing() {
    return (
        <div className={st('BannerFishing')}>
            <img alt="footer" src={banner} />

            <LeftToRight 
                bgcolor={'BannerFishing-container'}
                image={<img alt="banner-math" src={bannerFooter} />}
                title='Ready to start your adventure with Dino?'
                slogan='Alright! Just start downloading the Dino Planet app and explore it by yourself!'
                desc={<button className={st('try-free-btn')}>Try for free</button>}
            />
        </div>
    );
}

export default BannerFishing;