import React from 'react';

export default function Lpar_Login() {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem', width: '100%', padding: '1.5rem' }}>
              <div className="card-body p-4 text-center">
                <div className="mb-md-4 mt-md-3 pb-4">
                  <h2 className="fw-bold text-uppercase fs-2">Login</h2>
                  <p className="text-white-50 fs-5 mb-4">Please enter your Login Details!</p>

                  <div className="form-outline form-white mb-3">
                    <input type="text" id="typeLparName" className="form-control form-control-lg fs-6" />
                    <label className="form-label fs-4" htmlFor="typeLparName">UserID</label>
                  </div>
                  <div className="form-outline form-white mb-3">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg fs-6" />
                    <label className="form-label fs-4" htmlFor="typePasswordX">Password</label>
                  </div>

                  <button className="btn btn-outline-light btn-lg px-4 fs-6" type="submit">Verify</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




