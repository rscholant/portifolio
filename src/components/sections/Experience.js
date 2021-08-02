import React from 'react';

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Full-stack Developer</h3>
            <div className="subheading mb-3">Windel Sistemas</div>
            <p>
              Analyze and develop new features to the applications proposed by
              the company, seek solutions to infrastructure problems that the
              application that was already in development suffers over time.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2020 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Delphi Developer Analyst</h3>
            <div className="subheading mb-3">
              Khnum Sistemas de Automação Comercial
            </div>
            <p>
              Analyze and develop solutions for complex functionalities of the
              system in question, such as issuing tax documents and generating
              digital files for the Federal Revenue.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">October 2009 - June 2020</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Computing instructor</h3>
            <div className="subheading mb-3">System's &amp; Stars</div>
            <p>
              Teaches and prepares the didactic material of the Computer classes
              according to guidance and content previously distributed, applies
              tests, develops works in class and clarifies doubts.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2006 - October 2009</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
