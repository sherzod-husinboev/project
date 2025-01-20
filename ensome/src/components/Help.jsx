import React from "react";
import { HelpData } from "../Constants/data";

function Help() {
    return (
        <section className='help'>
            <div className='success-section'>
                <h2>Glad to help your success</h2>

                <div className='success-cards'>
                    {
                        HelpData.map(item => {
                            return (
                                <div className='card' key={item.id}>
                                    <span className='date'>{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <button>Proxy</button>
                                    <button>VPN</button>
                                </div>
                            )
                        })
                    }
                </div>

                <button className='learn-more'>Learn more</button>
            </div>
        </section>
    );
}
export default Help;
