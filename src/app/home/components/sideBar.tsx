// components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
      {/* Add your tabs or links here */}
      <nav>
        <ul>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#cv">CV/Resume</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
