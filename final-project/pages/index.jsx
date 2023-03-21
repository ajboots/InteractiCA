import React, { useRef,useState,useEffect  } from 'react';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
function handlePageChange() {
  // const pageContainer = document.querySelector('.pages');
  // pageContainer.scrollTop = 0;
}
function App() {
  const pagesRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Use a timeout to wait until scrolling has finished
      clearTimeout(pagesRef.current.timeout);
      pagesRef.current.timeout = setTimeout(() => {
        const pageWidth = pagesRef.current.offsetWidth;
        const currentPage = Math.floor(pagesRef.current.scrollLeft / pageWidth);
        if((pagesRef.current.scrollLeft % pageWidth) % 25 == 0) {
          //if we wanted to know when pages change, this is how
        }
      }, 100);
    };

    pagesRef.current.addEventListener('scroll', handleScroll);

    return () => {
      pagesRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPage = (pageNumber) => {
    pagesRef.current.scrollTo({
      left: pageNumber * pagesRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  const scrollToNextPage = () => {
    pagesRef.current.scrollLeft += window.innerWidth;
  };

  return (
    
    <div className="App">
      <h1>This can be shared text</h1>
      <div className="page-indicators">
        <button onClick={() => scrollToPage(0)} className={currentPage === 0 ? 'active' : ''}>1</button>
        <button onClick={() => scrollToPage(1)} className={currentPage === 1 ? 'active' : ''}>2</button>
        <button onClick={() => scrollToPage(2)} className={currentPage === 2 ? 'active' : ''}>3</button>
      </div>
      <div className="pages" ref={pagesRef}>
        <div className="page">
          <Page1 />
        </div>
        <div className="page">
          <Page2 />
        </div>
        <div className="page">
          <Page3 />
        </div>
      </div>
      <div className="scroll-button" onClick={scrollToNextPage}>
        <span>&#8594;</span>
      </div>
    </div>
  );
}

export default App;