import React from 'react';

const Resume = ({firstName, lastName, address, phone, email, socialLinks}) => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {firstName}
          <span className="text-primary">{lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {address} · {phone} · 
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <p className="lead mb-5">          
        Hello, I am Rafael, I have been working with development for over ten years, 
        I have great experience with Delphi development that I started using in 
        mid 2010 and from 2020 I started a new challenge in my career and now 
        I work as an Android developer analyst. I have a fascination for new technologies, 
        lately I have learned a lot about Node.js, React.js and React Native.
        </p>
        <div className="social-icons">
          {socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
