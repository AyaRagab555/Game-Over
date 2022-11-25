import axios from 'axios';
import React ,{ useEffect , useState  } from 'react';
import { useParams } from 'react-router-dom';
import GameItem from '../GameItem/GameItem';
import ReloadingPage from '../ReloadingPage/ReloadingPage';

export default function Platform() {
    let [isLoading , setIsLoading] = useState(false)
    let [gamesList, setGamesList] = useState([]);
    let [next , setNext] = useState(20);

    let myProps = useParams();

    async function getGamesData (platform){
        let response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            headers : {'X-RapidAPI-Key': 
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
            params: {
                platform: platform,
            }
        })
        setGamesList(response.data)
        setIsLoading(false)

    }

    useEffect(()=>{
        setIsLoading(true)
        getGamesData(myProps.platform)
        setNext(20)

    },[myProps]);


    function ShowMoreBtn (){
        setNext(next + 20)
       }

  return <>
  {console.log(gamesList)}{isLoading?<ReloadingPage/>
    :<div className="container my-5 p-3">
        <div className="row g-4 my-5">
        {gamesList.slice(0,next).map((game ,index) => <GameItem key={index} game={game} />)}
        </div>
        <div className="d-flex justify-content-center"><button onClick={ShowMoreBtn} className='btn btn-outline-secondary'>More Games<i className="bi bi-chevron-right"></i></button></div>
    </div>}
  
  
  
  </>
}
