import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://sheets.googleapis.com/v4/spreadsheets/1ubXmMhC6uk7AOqsozO4iYzXGWAJbrw3aY4c95yPRBK8/values/Sheet1!A1:B10?key=AIzaSyDVLXCeHjDQyq0XuMlbyt-rdHbykRLt__E/edit?usp=sharing`
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => <div key={cellIndex}>{cell}</div>)}
        </div>
      ))}
    </div>
  );
  
};

export default YourComponent;
