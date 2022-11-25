import axios from 'axios';
import React ,{ useEffect , useState  } from 'react';
import { Link } from 'react-router-dom';
import ReloadingPage from '../ReloadingPage/ReloadingPage';

export default function Home() {
    let [gamesList, setGamesList] = useState([]);
    let [isLoading , setIsLoading] = useState(false);


    async function getGamesData (){
        let response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
            headers : {'X-RapidAPI-Key': 
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
            
        })
        setGamesList(response.data)
        setIsLoading(false)
    }

    useEffect(()=>{
        setIsLoading(true)
        getGamesData()
    },[])

  return <>
 {isLoading == true?<ReloadingPage/>:<>

    <div className="header-desc my-5 p-4 text-center">
        <div className="my-5">
            <h1>Find & track the best <span className='text-third' >free-to-play</span> games!</h1>
            <p className='text-muted fs-5 fw-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link to="/all" className="text-secondary text-decoration-none "><button className='btn btn-outline-secondary'>
                Browser Gamees</button></Link>
        </div>
    </div>

    <div className="container my-5 p-3">
        <div className="row ">
            <h3 className='mb-3'><i className='fas fa-robot'></i>
                Personalized Recommendations</h3>
            {gamesList.filter(game=> game.title == "Genshin Impact"||game.title =="Naruto Online"||game.title =="Fall Guys").map((game,index)=>
            <div key={index} className="col-md-4">
                <Link className='HoverNo text-decoration-none text-second' to={`/gameDetails/${game.id}`}>
                <div className="itemContain bg-second rounded-1 pointer">
                    <img src={game.thumbnail} className="w-100 rounded-top-1"  />
                    <div className="cont p-3">
                        <div className="d-flex justify-content-between"><h4>{game.title}</h4> 
                        <button className='bg-third text-white rounded fs-7 fw-bold border-0'>FREE</button></div>
                </div></div></Link></div>) }


        </div>
    </div></>}
  
  
  
  </>
}
