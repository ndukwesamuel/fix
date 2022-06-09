import React, {useEffect,useState} from 'react'


const Fetch = () => {
  const [post, setPost] = useState([]);
    
    
  const getdata = async () => {
    const res = await fetch("https://api.coinlore.net/api/tickers/?start=100&limit=5")
    const data = await res.json()
    console.log(data);
    setPost(data.data)
  };
  
  useEffect(() => {
    getdata()
  }, []);

  return (
  <div>
    {post.map((p) =>{
  return (
      <div>
      <h1>{p.symbol}</h1>
      <h2>{p.name}</h2>
      <h2>{p.price_usd}</h2>
      </div>
  );
 })}
  </div>
  )
}


export default Fetch