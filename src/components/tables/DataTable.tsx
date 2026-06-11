import React from 'react';
import type { TableRow } from '../../types';

type Props = { rows: TableRow[] };

const DataTable: React.FC<Props> = ({ rows }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(r => (
        <tr key={r.id}>
          <td>{r.id}</td>
          <td>{r.name}</td>
          <td>{r.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
