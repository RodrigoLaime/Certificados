import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Javascript from './components/Javascript.jsx'
import Reactjs from './components/Reactjs.jsx'
import Front from './components/Front.jsx'
import Logica from './components/Logica.jsx'
import Terminal from './components/Terminal.jsx'
import Nodejs from './components/Nodejs.jsx'
import Inicio from './components/Inicio.jsx'
import './style.css'

const App = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [activeMenu, setActiveMenu] = useState(false)

    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/javascript', label: 'JavaScript' },
        { to: '/react', label: 'React' },
        { to: '/front', label: 'Frontend' },
        { to: '/logica', label: 'Logica' },
        { to: '/terminal', label: 'Terminal' },
        { to: '/node', label: 'Node.js' },
    ];


    const handleLinkClick = (link) => {
        setActiveLink(link);
        console.log(link)
    };
    return (
        <div className='main'>
            <BrowserRouter >
                <nav className={activeMenu ? '' : 'oculto'}>
                    <div className='icon'>
                        <button type='button' className='iconMenu' onClick={() => setActiveMenu(!activeMenu)}><i class="fa-solid fa-bars"></i></button>
                    </div>
                    <div className='container-menu'>
                        {links.map((link, index) => (
                            <div key={index} className={activeLink === link.to ? 'active' : ''}>
                                {/* <div key={index} className={link.to === '/' ? 'active' : activeLink === link.to ? 'active' : ''}> */}
                                <Link className='a' to={link.to} onClick={() => handleLinkClick(link.to)}>
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/javascript" element={<Javascript />} />
                    <Route path="/react" element={<Reactjs />} />
                    <Route path="/front" element={<Front />} />
                    <Route path="/logica" element={<Logica />} />
                    <Route path="/terminal" element={<Terminal />} />
                    <Route path="/node" element={<Nodejs />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App