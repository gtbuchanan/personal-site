import React from 'react';
import './NetworkGroup.css';
import NetworkIcon from './NetworkIcon';

function NetworkGroup(props) {
    const icons = props.networks.map(network =>
        <li key={network.name}>
            <NetworkIcon network={network} />
        </li>
    );
    return (
        <section className={'NetworkGroup ' + props.className}>
            {props.titlePosition === 'top' &&
                <h2>{props.title}</h2>
            }
            <ul>{icons}</ul>
            {props.titlePosition === 'bottom' &&
                <h2>{props.title}</h2>
            }
        </section>
    );
}

export default NetworkGroup;