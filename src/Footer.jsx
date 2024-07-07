import "./footer.css";
import Button from "./Button";

function Footer({ setPage }) {

    <Button type="button" visual="link"
        onClick={(e) => {
            e.preventDefault();
            setPage('Home');
        }}>Home</Button>

    return (
        <footer className="footer">
            <p className="external-links">External Links:</p>
            <ul className="footer-list">
                <li className="footer-list__item">
                    <a href="https://en.wikipedia.org/wiki/Giant_panda"
                        className="footer-list__link">Wikipedia on Pandas</a>
                </li>
                <li className="footer-list__item">
                    <a href="https://www.panda.org.cn/en/"
                        className="footer-list__link">Chengdu Panda Base</a>
                </li>
                <li className="footer-list__item">
                    <a href="https://en.ipanda.com/?spm=C98970.PHSCvfkkgowB.M9rzDgpjel2S.21"
                        className="footer-list__link">Coverage of Pandas</a>
                </li>

            </ul>
            <p className="footer-update">@ April 2024 | Seattle, WA </p>



        </footer>

    );
}


export default Footer;

