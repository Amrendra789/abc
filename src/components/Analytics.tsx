// src/components/Analytics.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table } from 'antd';
import jobData from '../data/jobs.json';  // Assuming your data is in JSON

interface JobData {
  year: number;
  totalJobs: number;
  avgSalary: number;
}

interface JobTitleData {
  title: string;
  count: number;
}

const Analytics: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // On row click handler to show job titles
  const onRowClick = (record: JobData) => {
    setSelectedYear(record.year);
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Count', dataIndex: 'count', key: 'count' },
  ];

  const jobTitles: JobTitleData[] = selectedYear
    ? jobData.filter((job) => job.year === selectedYear)[0].titles
    : [];

  return (
    <div>
      <h2>Job Data Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={jobData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalJobs" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="avgSalary" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <Table
        columns={[
          { title: 'Year', dataIndex: 'year', key: 'year' },
          { title: 'Total Jobs', dataIndex: 'totalJobs', key: 'totalJobs' },
          { title: 'Average Salary', dataIndex: 'avgSalary', key: 'avgSalary' },
        ]}
        dataSource={jobData}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
      />

      {selectedYear && (
        <div>
          <h3>Job Titles for {selectedYear}</h3>
          <Table columns={columns} dataSource={jobTitles} />
        </div>
      )}
    </div>
  );
};

export default Analytics;
