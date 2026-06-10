import React from 'react';
import Card from './Card';

type Props = { label: string; value: string | number };

const StatCard: React.FC<Props> = ({ label, value }) => (
  <Card title={label}>
    <div className="stat-value">{value}</div>
  </Card>
);

export default StatCard;
