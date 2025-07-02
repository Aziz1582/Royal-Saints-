
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminUploadTest from './components/AdminUploadTest';
import StudentTestsList from './components/StudentTestsList';
import StudentTestSubmission from './components/StudentTestSubmission';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload-test" element={<AdminUploadTest />} />
        <Route path="/tests" element={<StudentTestsList />} />
        <Route path="/submit/:id" element={<StudentTestSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
