import React, { useState } from 'react';
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Nav";
import Portfolio from "./Portfolio";
import Resume from "./Resume"

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renerPage = () => {
        switch(currentPage) {
            case "About":
                return <About/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <Contact/>;
            case "Resume":
                return <Resume/>;
            default:
                return <about/>;
        }
    };

    return(
        <div>
            <nav>
                <div>
                    <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/RoobyDoobster?tab=repositories"
                    >
                        <span>Reuben Schmolke</span>
                    </a>
                </div>
            </nav>
            <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;