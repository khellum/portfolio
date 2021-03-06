import "./intro.scss";
import me from "../../assets/me.png";
import down from "../../assets/down.png";

export default function Intro({menuOpen}) {
    return(
        <div className={'intro ' + (menuOpen && "active")} id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="Author's"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Kedir Lluch</h1>
                    <h3>Freelance<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt="down icon"/>
                </a>
            </div>
        </div>
    )
}   