import React, { useState } from 'react';
import './App.css';
import JobTable from './components/JobTable';
import Analytics from './components/Analytics';
import './styles.css';  // Import custom global styles
import { Row, Col, Button } from 'antd';  // Import Grid and Button from Ant Design

function App() {
  // State to handle dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Page Title */}
      <h1>Machine Learning Job Analytics</h1>

      {/* Main Container */}
      <div className="container">
        <Row gutter={[16, 16]}>
          {/* Job Table */}
          <Col span={24}>
            <div className="table-container">
              <JobTable />
            </div>
          </Col>

          {/* Analytics (Line Chart & Detailed Job Data) */}
          <Col span={24}>
            <div className="chart-container">
              <Analytics />
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer with Dark Mode Toggle */}
      <footer className="footer">
        <Button onClick={toggleDarkMode} type="primary">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        <p>© 2024 Floqer Assignment</p>
      </footer>
    </div>
  );
}

export default App;
