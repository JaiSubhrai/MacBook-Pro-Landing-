import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000000 000 0000.</p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer