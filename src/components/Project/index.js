import React from "react";

function Project(props) {
    return(
        <div>
            <div>
                {props.projects.map((project) =>(
                    <div>
                        <div>
                            <div>
                                <figure>
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image"/>
                                    </a>
                                </figure>
                            </div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>
                                        <p key={project.id}>
                                            {project.title}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {project.description}
                                    <br/>
                                    <br/>
                                    <div>
                                        Languages: {project.languages}
                                        <br/>
                                        NPM Packages: {project.packages}
                                    </div>
                                    <div>
                                        <footer>
                                            <a
                                            href={project.repo}
                                            target="_blank" rel="noreferrer"
                                            >
                                                See the Repo 
                                            </a>
                                            <br/>
                                            <a href={project.live}
                                            target="_blank" rel="noreferrer"
                                            >
                                                See the Live Site 
                                            </a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;