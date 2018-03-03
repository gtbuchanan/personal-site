import React from 'react';
import './NetworkIcon.css';

function NetworkIcon(props) {
  const network = props.network;
  return (
    <a className="NetworkIcon" href={network.uri} target="_blank">
      <img title={network.name} alt={network.name} src={network.icon} />
    </a>
  );
}

export default NetworkIcon;