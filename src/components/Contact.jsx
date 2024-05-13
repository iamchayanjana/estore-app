import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Contact Us</h1>
              <p className="card-text text-center">If you have any questions or concerns, please feel free to contact us using the information below:</p>
              <div className="mb-4">
                <h2>Address:</h2>
                <p>1234 Main Street</p>
                <p>City, State, ZIP</p>
              </div>
              <div className="mb-4">
                <h2>Email:</h2>
                <p>info@example.com</p>
              </div>
              <div className="mb-4">
                <h2>Phone:</h2>
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea className="form-control" id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
