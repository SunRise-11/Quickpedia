"use client"
import axios from "axios"
import { useEffect } from "react";


export default function Home() {

  const fetchHello = async () => {
    const response = await axios.get("https://quickipedia.azurewebsites.net/api/hello");
    const hello = response.data;
    console.log(hello);
  }
  useEffect(() => {
    fetchHello();
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {}
    </main>
  )
}
