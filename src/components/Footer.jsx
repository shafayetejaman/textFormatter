import React from 'react';

export default function Footer(props)
{
    return (
        
        <footer className={`bg-${props.mode === 'dark' ? "dark" : "primary"} text-white text-center text-lg-start mt-auto`}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About TextFormatter</h5>
                        <p>
                            TextFormatter is your go-to web app for all text formatting needs. Whether you're adjusting text for documents, web content, or any other purpose, our tools make it easy and efficient. Enjoy a seamless experience with our user-friendly interface!
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Features</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Documentation</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Tutorials</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Blog</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2024 TextFormatter:
                <a className="text-white" href="https://yourwebsite.com/">TextFormatter.com</a>
            </div>
        </footer>

    );
}
