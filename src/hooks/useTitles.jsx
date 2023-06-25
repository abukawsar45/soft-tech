import  { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(() => {
    document.title = `SoftTech ${title}`;
  })
};

export default useTitles;