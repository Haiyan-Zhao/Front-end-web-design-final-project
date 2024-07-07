import { useState, useEffect } from 'react'

import Header from "./Header";
import MainArea from "./MainArea";
import Footer from "./Footer";

function App() {

  const [page, setPage] = useState('/');
  function handlePageLoad() {
    setPage(document.location.pathname);
  };

  useEffect(() => {
    handlePageLoad();
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);


  return (
    <div className="app">
      <Header setPage={setPage} />
      <MainArea page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
