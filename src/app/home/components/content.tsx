// components/Content.tsx
import React from 'react';

const Content: React.FC = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {/* Replace the following with the content of each tab */}
      <section id="technologies">
        <h2 className="text-xl font-bold mb-4">Technologies</h2>
        {/* Add your list of technologies here */}
        <ul>
          <li>Technology 1</li>
          <li>Technology 2</li>
          {/* ... */}
        </ul>
      </section>

      {/* CV/Resume section */}
      <section id="cv">
        <h2 className="text-xl font-bold mb-4">CV/Resume</h2>
        {/* Add your CV/Resume content here */}
      </section>

      {/* Contact me section */}
      <section id="contact">
        <h2 className="text-xl font-bold mb-4">Contact me</h2>
        {/* Add your contact form or information here */}
      </section>
    </div>
  );
};

export default Content;
