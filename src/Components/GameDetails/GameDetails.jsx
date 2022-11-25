import axios from 'axios';
import React,{useEffect} from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReloadingPage from '../ReloadingPage/ReloadingPage';

export default function GameDetails() {

    let para = useParams();
    let [isLoading , setIsLoading] = useState(false)
    let [gameDetails ,setGameDetails] = useState(""); 
    async function getGamesData (d){
        let response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",{
            headers : {'X-RapidAPI-Key': 
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
            params:{
                id : d
            }
        })
        setGameDetails(response.data);
        setIsLoading(false)
    }

    useEffect(()=>{
        getGamesData(para.id)
        setIsLoading(true)
    },[])
  return <>{isLoading?<ReloadingPage/>
  :
  <div className="container my-5 p-3">
        <div className="row g-4 my-5">
            <div className="col-md-4">
                <img className='w-100 rounded' src={gameDetails.thumbnail} />
                <div className="d-flex mt-2 w-100 justify-content-between">
                    <span className="bg-btw py-2 pointer p-3 rounded">FREE</span>
                    <button className='bg-third w-75 text-white p-2 me-3 rounded border-0'>
                        <a target='_blank' className='text-white text-decoration-none' href={gameDetails.freetogame_profile_url}> PLAY NOW <i className="fas fa-sign-out-alt"></i></a></button>
                </div>
            </div>
            <div className="col-md-8">
                <h1>{gameDetails.title}</h1>
                <h5 className="mt-3">About {gameDetails.title}</h5>
                <p>{gameDetails.description}</p>
                <h5 className="mt-3">Minimum System Requirements</h5>
                {gameDetails.minimum_system_requirements?
                <ul className="list-unstyled ms-2">
                    <li><span className='fw-bold'>graphics : </span>{gameDetails.minimum_system_requirements.graphics}</li>
                    <li><span className='fw-bold'>memory : </span>{gameDetails.minimum_system_requirements.memory}</li>
                    <li><span className='fw-bold'>os : </span>{gameDetails.minimum_system_requirements.os}</li>
                    <li><span className='fw-bold'>processor : </span>{gameDetails.minimum_system_requirements.processor}</li>
                    <li><span className='fw-bold'>storage : </span>{gameDetails.minimum_system_requirements.storage}</li>
                </ul>:""}
                <h4 >{gameDetails.title} Screenshots</h4>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {gameDetails.screenshots?gameDetails.screenshots.map((img , index)=><div key={index} className="carousel-item active">
                            <img src={img.image} className="d-block w-100" />
                        </div>):""}
                    </div>
                </div>
                <h2 >Additional Information</h2>
                <div className="row">
                <div className="col-6 col-md-4"><span className="text-muted">Title</span><p>{gameDetails.title}</p></div>
                <div className="col-6 col-md-4"><span className="text-muted">Developer</span><p>{gameDetails.developer}</p></div>
                <div className="col-6 col-md-4"><span className="text-muted">Publisher</span><p>{gameDetails.publisher}</p></div>
                <div className="col-6 col-md-4"><span className="text-muted">Release Date</span><p>{gameDetails.release_date}</p></div>
                <div className="col-6 col-md-4"><span className="text-muted">Genre</span><p>{gameDetails.genre}</p></div>
                <div className="col-6 col-md-4"><span className="text-muted d-block">Platform</span>
                {gameDetails.platform?gameDetails.platform.split(" ").includes("Windows")?<i className="fa-brands fa-windows"></i>:<i className="fas fa-window-maximize"></i>:""}
                <p className='d-inline' > {gameDetails.platform}</p></div>
                </div>
            </div>
        </div>
    </div>}
  </>
}
