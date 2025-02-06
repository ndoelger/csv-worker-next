'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Home = () => {
  const [data, setData] = useState('');

  const getData = async () => {
    const response = await fetch('/api/csv');
    const text = await response.text();
    setData(text);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className={styles.page}>CSV Worker</div>;
};

export default Home;
