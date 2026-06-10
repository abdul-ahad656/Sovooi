import React from 'react';

type Props = { title?: string; children?: React.ReactNode };

const Card: React.FC<Props> = ({ title, children }) => (
  <div className="card">
    {title && <h3 className="card-title">{title}</h3>}
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
