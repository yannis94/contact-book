import github from "../img/github.png"
import '../style/Footer.css'

export default function Footer () {
    return (
        <div className="footer">
            <p>School project - Copyright © 2021 | Developed by yannis94 <a href="https://github.com/yannis94/contact-book"><img src={github} /></a></p>
        </div>
    )
}