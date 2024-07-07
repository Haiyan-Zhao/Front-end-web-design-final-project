import logo from "./images/homepage-logo.jpg";
import "./header.css";
import Button from "./Button";
import GlobalNav from "./GlobalNav";

function Header({ setPage }) {

    return (
        <header className="header">
            <div className="logo-title">
                <Button className="return-home-link" type="button" visual="link"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('/');
                    }}>
                    <img
                        className="header__logo"
                        src={logo}
                        width="100"
                        height="100"
                        alt="A close-up of a giant panda with lush green foliage, munching on bamboo leaves."
                    />
                </Button>

                <a href="#main-content" className="skip-link">Skip to content</a>

                <h1 className="header__title">
                    Meet the Pandas
                </h1>

            </div>

            <GlobalNav className="hamburger-menu" setPage={setPage} />
        </header>

    );


}


export default Header;