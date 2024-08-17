import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Share
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Export
                </button>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
              >
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ducimus tempore dolorem vero architecto qui earum rerum fugit veniam error.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
