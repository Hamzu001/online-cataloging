import React, { useState } from "react";

// Sample data (20 rows)
const data = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  value: `Value ${i + 1}`,
}));

const StudentCards = () => {
  return (
    <div>
      <p>Student card </p>
    </div>
  );
};

export default StudentCards;
