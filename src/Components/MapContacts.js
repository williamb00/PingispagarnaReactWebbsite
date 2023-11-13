import React from 'react';

const MapContacts = () => {
  return (
    <div className="Map-container">
      <iframe
        title="Arena Åstorp"
        width="100%"
        height="500"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.20937582042!2d12.932003077119933!3d56.136191973228584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653d3575758b3cd%3A0xf1965381d1022d74!2sArena%20%C3%85storp!5e0!3m2!1ssv!2sse!4v1699877409234!5m2!1ssv!2sse"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContacts;

