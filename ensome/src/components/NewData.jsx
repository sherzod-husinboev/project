import React from "react";
import Bunisess from "/images/newest-bunisess.png";
import NewDataImg from "/images/new-data.png";
function NewData() {
    return (
        <section className="new-data">
            <div className="container">
                {/* Business Analytics Platform Section */}
                <div className="section-wrapper">
                    <div className="content">
                        <h2>The newest business analytics platform</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.
                        </p>
                        <button className="learn-btn">Learn more</button>
                    </div>
                    <div className="image">
                        <img src={Bunisess} alt="Analytics Platform" />
                    </div>
                </div>

                {/* Data Solutions Section */}
                <div className="section-wrapper reverse">
                    <div className="content">
                        <h2>Radically new data solutions</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.
                        </p>
                        <button className="learn-btn">Learn more</button>
                    </div>
                    <div className="image">
                        <img src={NewDataImg} alt="Data Solutions" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewData;