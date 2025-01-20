import React from "react";

import { About, Banner, Clients, Comments, Contact, Help, NewData, Stat } from "../components/Index";
function Main() {
    return (
        <main className='main'>
            <Banner />
            <About />
            <NewData />
            <Help />
            <Comments />
            <Stat />
            <Contact />
            <Clients />
        </main>
    )
}

export default Main;