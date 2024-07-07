import Home from "./Home";
import Pandas from "./Pandas";
import FAQs from "./FAQs";
import About from "./About";


function MainArea({ page, setPage }) {

    return (
        <main id="main-content">
            {(page === '/') && <Home setPage={setPage} />}
            {(page === '/pandas.html') && <Pandas />}
            {(page === '/FAQs.html') && <FAQs />}
            {(page === '/about.html') && <About />}
        </main>
    );

}

export default MainArea;