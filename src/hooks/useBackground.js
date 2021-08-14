import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants/colors';

const useBackground = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
  }, []);

  return { color };
};

export default useBackground;
