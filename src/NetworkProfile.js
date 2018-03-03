import React from 'react';
import './NetworkProfile.css';
import NetworkGroup from './NetworkGroup';
import networks from './networks';

function NetworkProfile(props) {
    const professionalNetworks = networks.filter(network => network.type === 'Professional');
    const socialNetworks = networks.filter(network => network.type === 'Social');
    const financialNetworks = networks.filter(network => network.type === 'Financial');
    return (
        <main>
            <NetworkGroup className="professional" title="Professional"
                          networks={professionalNetworks} titlePosition="top" />

            <img title="George Taylor Buchanan" alt="George Taylor Buchanan" src="https://www.gravatar.com/avatar/bab942d497bfde94e541a3d6fc299202?s=250" />

            <NetworkGroup className="social" title="Social"
                          networks={socialNetworks} titlePosition="bottom" />

            <NetworkGroup className="financial" title="Financial"
                          networks={financialNetworks} titlePosition="bottom" />

            <NetworkGroup className="all-networks" title="Networks"
                          networks={networks} titlePosition="bottom" />
        </main>
    );
}

export default NetworkProfile;