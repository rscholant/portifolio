import React from 'react';

const Education = () => {
    return (
        <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Instituto de Desenvolvimento do Alto Uruguai (IDEAU) </h3>
              <div className="subheading mb-3">Postgraduate degree in strategic management of information technology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2014 - Not Finished</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Instituto de Desenvolvimento do Alto Uruguai (IDEAU) </h3>
              <div className="subheading mb-3">Technologist in Systems Analysis and Development</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2010 - August 2013</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Education;