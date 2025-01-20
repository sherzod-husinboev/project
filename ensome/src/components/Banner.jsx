import React from "react";
import background from "/images/banner-img.png";
import PlayBtn from "../assets/icons/PlayButtonIcon";
import SponseredIcon from "../assets/icons/SponseredIcon";

function Banner() {
    return (
        <section className='banner'>
            <div className='banner__content'>
                <h1 className='banner__title'>
                    Find true power in your data with Ensome
                </h1>
                <p className='banner__description'>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                </p>
                <div className='banner__buttons'>
                    <button className='button button--primary banner__button'>
                        Learn more
                    </button>
                    <button className='button button--secondary banner__button'>
                        <PlayBtn />
                        Watch the demo
                    </button>
                </div>
            </div>
            <div className='banner__media'>
                <img
                    src={background}
                    alt='Analytics'
                    className='banner__image'
                />
            </div>
            <div className="sponser">
                <SponseredIcon />
            </div>
        </section>
    );
}
export default Banner;
