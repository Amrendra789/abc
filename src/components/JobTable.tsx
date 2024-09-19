// src/components/JobTable.tsx
import React, { useState } from 'react';
import { Table } from 'antd';
import data from '../data/jobs.json';  // Import data from a local JSON file

interface JobData {
  year: number;
  totalJobs: number;
  avgSalary: number;
}

const JobTable: React.FC = () => {
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const handleChange = (_: any, __: any, sorter: any) => {
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a: JobData, b: JobData) => a.year - b.year,
      sortOrder: sortedInfo.columnKey === 'year' && sortedInfo.order,
    },
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a: JobData, b: JobData) => a.totalJobs - b.totalJobs,
      sortOrder: sortedInfo.columnKey === 'totalJobs' && sortedInfo.order,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'avgSalary',
      key: 'avgSalary',
      sorter: (a: JobData, b: JobData) => a.avgSalary - b.avgSalary,
      sortOrder: sortedInfo.columnKey === 'avgSalary' && sortedInfo.order,
    },
  ];

  return <Table columns={columns} dataSource={data} onChange={handleChange} />;
};

export default JobTable;
