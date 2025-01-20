import React from "react";

function Contact() {
    return (
        <section className='contact'>
            <div className='contact-section'>
                <div className='contact-info'>
                    <h2>
                        Left questions? Contacts us <br /> now for a free
                        consultation <br />
                        and free trial!
                    </h2>
                    <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam <br /> corporis suscipit laboriosam.
                    </p>

                    <div className='contact-details'>
                        <p>
                            Email <br /> <b>ensome@info.co.us</b>
                        </p>
                        <p>
                            Phone <br />
                            <b>+1 601-201-5580</b>
                        </p>
                        <p>
                            Address
                            <br />{" "}
                            <b>
                                1642 Washington Avenue, Jackson, MS,
                                Mississippi, 39201
                            </b>
                        </p>
                    </div>
                </div>

                <div className='contact-form'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Theme' />
                    <textarea placeholder='Your message'></textarea>
                    <button type='submit'>Send</button>
                </div>
            </div>
        </section>
    );
}
export default Contact;
