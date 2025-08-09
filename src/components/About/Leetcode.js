import React from "react";
import { Row } from "react-bootstrap";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useEffect, useState } from "react";
import leetcodeBackupData from './leetcodeBackup';

function Leetcode() {

    const [datewiseProblems,setDatewiseProblems]=useState([])
    useEffect(()=>{
    console.log("ABOUT component loaded");
    const username = "rock_llama";

   fetch('http://localhost:8000/api/leetcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username
      }),
    })
      .then(res => res.json())
      .then(data => {
      console.log("FETCH SUCCESS")
        const parsed = data;
        console.log(parsed);
        setDatewiseProblems(parsed);
      })
      .catch((error) => {
              console.error("API failed, using backup", error);
              setDatewiseProblems(leetcodeBackupData);
            });
    }, []);
return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
    <HeatMap
      startDate={new Date('2025-01-01')}
      endDate={new Date()}
      values={datewiseProblems}
      classForValue={(value) => {
          if (!value) return 'color-empty';
          if (value.count >= 15) return 'color-scale-4';
          if (value.count >= 10) return 'color-scale-3';
          if (value.count >= 5) return 'color-scale-2';
          return 'color-scale-1';
        }}
    />
    </Row>
  );
}
//[
//        { date: '2025-07-10', count: 3 },
//        { date: '2025-07-12', count: 1 },
//        // ...fetch and format LeetCode submissions
//      ]
export default Leetcode;
