import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import logo from '../assets/images/Logo_bmc.png';

const cookies = new Cookies();

export default function Lpar_Login() {
    const navigate = useNavigate();
    const [hostname, setHostname] = useState('');
    const [port, setPort] = useState('');

    const handleVerify = async () => {
        if (!hostname || !port) {
            alert('Please enter both Hostname and Port!');
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:5000/validate-lpar?host=${hostname}&port=${port}`);
            const data = await response.json();

            if (data.status === "success") {
                cookies.set('credentials', { hostname, port }, { path: '/', secure: true, sameSite: 'Strict', expires: new Date(Date.now() + 86400000) });
                alert('Host validated successfully!');
                navigate('/login-auth');
            } else {
                alert('Host is not reachable!');
            }
        } catch (error) {
            console.error("Validation Error:", error);
            alert('Error validating host!');
        }
    };

    const handleBack = () => {
        navigate('/');
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
                                <p className="text-white-50 fs-5 mb-4">Please enter your Lpar Details!</p>

                                <div className="form-outline form-white mb-3">
                                    <input type="text" id="typeLparName" className="form-control form-control-lg fs-6"
                                        value={hostname} onChange={(e) => setHostname(e.target.value)}
                                    />
                                    <label className="form-label fs-4" htmlFor="typeLparName">Lpar Name</label>
                                </div>
                                <div className="form-outline form-white mb-3">
                                    <input type="text" id="typePortX" className="form-control form-control-lg fs-6"
                                        value={port} onChange={(e) => setPort(e.target.value)}
                                    />
                                    <label className="form-label fs-4" htmlFor="typePortX">Port No.</label>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-light btn-lg px-4 fs-6" type="button" onClick={handleBack}>
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
