import React from 'react';
import Layout from '../components/layout/Layout';
import StatCard from '../components/cards/StatCard';
import LineChart from '../components/charts/LineChart';
import DataTable from '../components/tables/DataTable';
import { sampleRows, sampleStats } from '../data/sampleData';

const Dashboard: React.FC = () => (
  <Layout>
    <section className="dashboard-stats">
      {sampleStats.map(s => (
        <StatCard key={s.label} label={s.label} value={s.value} />
      ))}
    </section>

    <section className="dashboard-chart">
      <LineChart />
    </section>

    <section className="dashboard-table">
      <DataTable rows={sampleRows} />
    </section>
  </Layout>
);

export default Dashboard;
