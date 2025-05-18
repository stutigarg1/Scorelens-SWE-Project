import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = ({ studentId }) => {
  const [changeRequests, setChangeRequests] = useState([]);

  useEffect(() => {
    const fetchChangeRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/changerequests?student_id=${studentId}`);
        setChangeRequests(response.data);
      } catch (error) {
        console.error("Error fetching change requests:", error);
      }
    };

    fetchChangeRequests();
  }, [studentId]);

  return (
    <div>
      {/* Notification Banner */}
      {changeRequests.length > 0 && (
        <div style={{
          backgroundColor: '#ffe0e0',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '20px',
          color: '#b30000',
          fontWeight: 'bold'
        }}>
           You have {changeRequests.length} pending change request(s)!
        </div>
      )}

      {/* Your regular dashboard content below */}
      <h2>Welcome to your dashboard!</h2>
      {/* More dashboard UI */}
    </div>
  );
};

export default StudentDashboard;
