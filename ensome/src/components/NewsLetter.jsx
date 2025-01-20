import React from "react";

function NewsLetter() {
    return (
        <section className='NewsLetter'>
            <div className='newsletter-section'>
                <div className='news-message'>
                    <h3>Subscribe to our newsletter</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium
                    </p>
                </div>

                <div className='newsletter-form'>
                    <input type='email' placeholder='Your email' />
                    <button type='submit'>Send</button>
                </div>
            </div>
        </section>
    );
}
export default NewsLetter;
