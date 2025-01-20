import React from "react";
import User_1 from "/images/user-1.png";
import User_2 from "/images/user-2.png";
import { CommentData } from "../Constants/data";

function Comments() {
    return (
        <section className='comment'>
            <div className='comment-section'>
                <h1>Trusted by the best in the business</h1>

                <div className='comment-cards'>
                    {CommentData.map((item) => {
                        return (
                            <div className='comment-card' key={item.id}>
                                <img src={item.logo} alt={item.name} />
                                <p className='quote'>{item.about}</p>
                                <div className='author'>
                                    <div className='author-info'>
                                        <h4>{item.name}</h4>
                                        <span>{item.job}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
export default Comments;
