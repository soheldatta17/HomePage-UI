import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/images/Logo_bmc.png'; // Import the logo

export default function Lpar_Login() {
    const navigate = useNavigate(); // Initialize navigation function

    const handleVerify = () => {
        navigate('/dashboard'); // Navigate to dashboard on verify
    };

    const handleBackToLogin = () => {
        navigate('/login'); // Navigate back to login page
    };

    return (
        <section className="vh-100 d-flex align-items-center justify-content-center gradient-custom">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem', padding: '1.5rem', width: '100%', maxWidth: '400px' }}>
                            <div className="card-body text-center">
                                <header className="mb-4">
                                    <img src={logo} alt="BMC Software Logo" className="logo" style={{ width: '50%', filter: 'brightness(1.5)' }} />
                                </header>
                                <h2 className="fw-bold text-uppercase fs-2">Login</h2>
                                <p className="text-white-50 fs-5 mb-4">Please enter your Login Details!</p>

                                <div className="form-outline form-white mb-3">
                                    <input type="text" id="typeLparName" className="form-control form-control-lg fs-6" />
                                    <label className="form-label fs-4" htmlFor="typeLparName">UserId</label>
                                </div>
                                <div className="form-outline form-white mb-3">
                                    <input type="password" id="typePasswordX" className="form-control form-control-lg fs-6" />
                                    <label className="form-label fs-4" htmlFor="typePasswordX">Password</label>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-light btn-lg px-4 fs-6" type="button" onClick={handleBackToLogin}>
                                        Back
                                    </button>
                                    <button className="btn btn-outline-light btn-lg px-4 fs-6" type="button" onClick={handleVerify}>
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
