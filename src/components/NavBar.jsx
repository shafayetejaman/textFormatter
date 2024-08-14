import React from 'react';

export default function NavBar(props)
{
    return (
        <header>
            <nav className={`navbar navbar-expand-lg bg-${props.mode === 'dark' ? "dark" : "primary"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">
                        <span><i className="fa-solid fa-envelope-open-text me-2"></i>{props.name}</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} defaultChecked={true} />
                        <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </nav>
        </header>
    );
}
