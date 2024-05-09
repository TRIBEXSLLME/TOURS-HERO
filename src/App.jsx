import Loading from './Loading'
import Tours from './Tours'
import './App.css'
import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  const removeTour =(id)=>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)

  }

  const [error, setError] =useState(false);
  

  const fetchTours = async () => {
  try {
    setLoading(true)


    const response = await fetch(url);

    // Check for successful response
    if (!response.ok) {
      setLoading(false)
      setError(true)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const tours = await response.json();
    console.log(tours);
    setLoading(false);
    setTours(tours)
  } catch (error) {
    setLoading(false);
    setError(true)
    console.error('Error fetching tours:', error);
  }
};


 useEffect(()=>{
  fetchTours()

 },[])

  if(loading){
    return (
    <main>
      <Loading />
    </main>
    )
  }
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} error={error} removeTour={removeTour} />
    </main>
  )
}

export default App
