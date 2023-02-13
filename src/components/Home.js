import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Home = () => {
    return (
        <div className='App'>
            <h1 className='title'>React basic hooks</h1>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/usestate">useState</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/useeffect">useEffect</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/usecontext">useContext</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/usereducer">useReducer</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/usecallback">useCallback</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/usememo">useMemo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/useref">useRef</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
