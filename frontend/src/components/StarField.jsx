import React from 'react';

const StarField = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      style={{ pointerEvents: 'none' }}
    >
      <source src="/blackhole-golden.webm" type="video/webm" />
    </video>
  );
};

export default StarField;