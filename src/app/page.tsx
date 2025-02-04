"use client"

import {useState, useEffect } from "react";
import styles from "./page.module.css";


const Home =  () => {
  
  const [data, setData] = useState({})

  const getData = async () => {
    const response = await fetch("/api/csv")
    const body = await response.json()
    setData(body)
  }

  const convertToCSV = async () => {
    
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className={styles.page}>
    CSV Worker
    </div>
  );
}

export default Home