import React from "react";

function Resume() {
    return(
        <div>
            <div>
                <p>Résumé</p>
                <hr/>
                <a
                href={process.env.PUBLIC_URL + "--UPLOAD RESUME--"}
                target="_blank" rel="noreferrer"
                >
                    <span>
                        <i></i>
                    </span>
                    <span>Download My Resume</span>
                </a>
            </div>
            <div>
                <p>Skills</p>
                <hr/>
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>OpneAPI, JSON</li>
                    <li>React</li>
                    <li>Markdown</li>
                    <li>Git</li>
                    <li>Github Repo Management</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;