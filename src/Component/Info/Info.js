import React from "react";
import "../Info/Info.css";
import Me from "../../Img/Me.jpg";
import Css from "../../Img/Css.png";
import Html from "../../Img/Html.png";
import ReactImg from "../../Img/ReactImg.png";
import Js from "../../Img/Js.png";
import Redux from "../../Img/Redux.png";
import screen12 from "../../Img/screen12.png";
import screen22 from "../../Img/screen22.png";
import vk3 from "../../Img/vk3.png";

const Info =() =>{
    return(
        <div className="info-main-container">
            <div className="border-opacity">
            </div>
            
            <div className="white-color" >
            </div>

            
            <div className="red-color">
            </div>
            <div className="red-color-second">
            </div>
            <div className="red-color-three">
            </div>
            <div className="red-color-four">
            </div>
            <div>
                <div className="container-img-me">
                    <img className="img-me" src={Me} alt="Me"/>
                </div>
            </div>
            <div className="info-container-main-text-left">
            <div className="container-text-frontend-developer">
                    <p className="text-frontend-developer">
                        FRONT-END DEVELOPER
                    </p>
                </div>
                <div className="container-text-alexandr-nomoconov">
                    <p className="text-alexandr-nomoconov">
                        Alxandr Nomokonov
                    </p>
                </div>

                <div className="line-under-frontend-developer">
                    
                </div>
                <div className="container-main-text-about-me">
                    <p className="main-text-about-me">
                    I am engaged in the development of websites,<br/>
                    their visual component,animation and various transitions.<br/> Which are easy and pleasant to use,<br/>
                    because they are easy to understand. <br/>
                    I easily assimilate new information,<br/>
                    and I like to get new knowledge and chips <br/>
                    that I didn't know before. I am also a simple person, <br/>
                    I easily find contact with new people and the team.
                    </p>
                </div>
                <div className="line-under-main-text">

                </div>
                <div className="container-second-text-about-me">
                    <p className="second-text-about-me">
                        I also have a little experience <br/>
                        in backend development, <span className="nodejs-class">Nodejs</span>,
                        <span className="nodejs-class"> express</span>. <br/>
                        And I have an interest in linux. <br/>
                        Maybe it will be a bonus,<br/>
                        but I know <span className="figma-class">Figma</span>.
                    </p>
                </div>
            </div>
            <div className="border-opacity-second">

            </div>
            <div className="container-my-skills">
                <p className="my-skills">
                    My skills
                </p>
                <div className="my-skills-line">
                </div>
                <div className="technologies">
                    TECHNOLOGIES
                </div>
            </div>
            <div className="container-for-skills">
                <div className="container-html-css-scss">
                    <div className="container-html">
                        <div className="html-img-container">
                            <img className="html-img" src={Html} alt="htmlImg"/>
                        </div>
                        <p>
                            HTML5
                        </p>
                    </div>
                    <div className="container-css-img">
                        <div>
                            <img className="css-img" src={Css} alt="CssImg"/>
                        </div>
                        <p>
                            CSS3/SCSS
                        </p>
                    </div>
                    <div className="git-img">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi-git" viewBox="0 0 16 16">
                            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
                            </svg>
                        </div>
                        <p>
                            GIT
                        </p>
                    </div>
                </div>
                <div className="container-javascript-react-redux">
                    <div className="containrt-js">
                        <div>
                            <img className="img-js" src={Js} alt="jsImg"/>
                        </div>
                        <p>
                            JavaScript
                        </p>
                    </div>

                    <div className="containrt-react">
                        <div>
                            <img className="react-img" src={ReactImg} alt="reactImg"/>
                        </div>
                        <p>
                            React
                        </p>
                    </div>
                    <div className="container-redux">
                        <div>
                            <img className="redux-img" src={Redux} alt="CssImg"/>
                        </div>
                        <p>
                            REDUX
                        </p>
                    </div>  
                </div>
            </div>
            <div className="border-opacity-three">

            </div>
                <div className="container-my-projects">
                    <p className="my-projects-text">
                        My project
                    </p>
                    <div className="my-skills-line">
                    </div>
                    <div className="interner-mark">
                        ONLINE STORE
                    </div>
                </div>
            <div>
                <div className="container-img-project">
                    <img className="img-my-projects" src={screen12} alt="screen1"/> 
                    <img className="img-my-projects-second" src={screen22} alt="screen2"/>
                </div>
                <p className="my-project-text">
                My biggest and most commercial project is an <span className="nodejs-class">online store</span>.<br/>
                 Which is at the stage of the customer's edits,<span className="my-project-text-br"> <br/></span> but it is already functioning and fulfilling its tasks.
                </p>
                <div className="hfghf">
                        <a className="link-container" href="http://blagboard.ru/">

                            <p className="link-link">Link</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                            </svg>
                        </a>
                    </div>
            </div>
            <div className="border-opacity-four">
            </div>
                <div className="contact-with-me">
                    <p>
                        Contact with me
                    </p>

                <div className="my-skills-line">
                </div>
                <p className="contact-with-me-here">
                    HERE
                </p>
            </div>
            <div className="container-contact-with-me">
                <a className="contact-with-me-container-telegramm" href="https://t.me/Jerr193" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                    </svg>
                <p>
                    TELEGRAM
                </p>
                </a>
                <a className="contact-with-me-container-vk" href="https://vk.com/nomokonov98" target="_blank" rel="noopener noreferrer">
                    <img className="contact-with-me-img-vk" src={vk3} alt="vkImg"/>
                    <p>VK</p>
                </a>
                <div className="contact-with-me-container-email" href="@" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                <p> nomoconov.sasha@yandex.ru</p>
                </div>
            </div>
            <div className="border-opacity-five">
            </div>
            <div className="under-box">
                <p className="under-box-text">
                    © 2022 All rights reserved
                </p>
            </div>
            
        </div>
    )
}

export default Info