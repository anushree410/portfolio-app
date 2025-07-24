import React from "react";
import { Row } from "react-bootstrap";
//import { LeetCode } from "leetcode-query";
import HeatMap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";


function Leetcode() {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
    <HeatMap
      startDate={new Date('2025-01-01')}
      endDate={new Date()}
      values={[
        { date: '2025-07-10', count: 3 },
        { date: '2025-07-12', count: 1 },
        // ...fetch and format LeetCode submissions
      ]}
    />
    </Row>
  );
}

export default Leetcode;
