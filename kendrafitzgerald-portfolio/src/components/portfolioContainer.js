import React, {useState} from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import '../styles/header.css'

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Resume/>
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div id='headerImage'>
            <NavTabs currentPage = {currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}
export default PortfolioContainer;

