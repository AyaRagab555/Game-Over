import axios from 'axios';
import React ,{ useEffect , useState  } from 'react';
import GameItem from '../GameItem/GameItem';
import ReloadingPage from '../ReloadingPage/ReloadingPage';

export default function All() {
    let [gamesList, setGamesList] = useState([]);
    let [isLoading , setIsLoading] = useState(false);
    let [next , setNext] = useState(20);


    async function getGamesData (){
        let response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            headers : {'X-RapidAPI-Key': 
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
            
        })
        setGamesList(response.data);
        setIsLoading(false)

    }

    useEffect(()=>{
        setIsLoading(true)
        getGamesData()

    },[])

    function ShowMoreBtn (){
     setNext(next + 20)
    }


  return <>
  {isLoading?<ReloadingPage/>:
    <div className="container my-5 p-3">
        <div className="row g-4 my-5">
        {gamesList.slice(0 , next).map((game ,index) => <GameItem key={index} game={game} />)}
        </div>
        <div className="d-flex justify-content-center"><button onClick={ShowMoreBtn} className='btn btn-outline-secondary'>More Games<i className="bi bi-chevron-right"></i></button></div>
    </div>}
  
  
  
  </>
}
