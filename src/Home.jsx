
import Carousel from "./Carousel";
import Button from "./Button";
import "./home.css";


function Home({ setPage }) {

    return (
        <div className="main-home">
            <Button
                className="main-home__title"
                type="button"
                visual="link"
                onClick={(e) => {
                    e.preventDefault();
                    setPage('/FAQs.html');
                }}>
                Welcome to the World of Pandas
            </Button>

            <Carousel />

        </div>
    );
}

export default Home;