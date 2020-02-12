import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BirthDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="DatePicker text-center" selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default BirthDate;
