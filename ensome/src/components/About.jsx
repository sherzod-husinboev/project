import React from "react";
import Key from "../assets/icons/KeyIcon";
import Machine from "../assets/icons/MachineIcon";
import Analitics from "../assets/icons/AnaliticsIcon";
import { AboutData } from "../Constants/data";
function About() {
    return (
        <section className="about">
            <div className="about__header">
                <h2 className="about__title">Why our clients choose Ensome?</h2>
                <p className="about__subtitle">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="about__content">
               {
                AboutData.map(item => {
                    return(
                        <div className="about-card" key={item.id}>
                        <div className="about-card__icon">
                            {item.logo}
                        </div>
                        <h3 className="about-card__title">{item.title}</h3>
                        <p className="about-card__description">{item.subtitle}</p>
                    </div>
                    )
                })
               }
            </div>
        </section>
    )
}
export default About;