import React from "react";

function Form() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-start">
                <div className="mx-4 text-primary">Edit Profile</div>
                <div className="mx-4 text-primary">Preferences</div>
                <div className="mx-4 text-primary">Security</div>
              </div>

              <div className="row mt-5">
                <div className="col-md-3">
                  <div className="profile-container">
                    <div className="profile-pic">
                      <img
                        alt="User Pic"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                        id="profile-image1"
                        height="200"
                      />
                      <i className="bi bi-pencil-square"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            defaultValue="Charlene Reed"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            defaultValue="charlenereed@gmail.com"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="dob" className="form-label">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            defaultValue="1990-01-25"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address1" className="form-label">
                            Permanent Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address1"
                            defaultValue="San Jose, California, USA"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="postal" className="form-label">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="postal"
                            defaultValue="45962"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            User Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            defaultValue="Charlene Rend"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            defaultValue="*********"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="address2" className="form-label">
                            Present Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            defaultValue="San Jose, California, USA"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="City" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            defaultValue="San Jose"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="USA" className="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            defaultValue="USA"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

