import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Resume from '../components/sections/Resume';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Interests from '../components/sections/Interests';
import Awards from '../components/sections/Awards';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume 
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      />

      <hr className="m-0" />

     <Experience />

      <hr className="m-0" />

      <Education />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Interests />

      <hr className="m-0" />

      <Awards />

    </div>
  </Layout>
);

export default IndexPage;
