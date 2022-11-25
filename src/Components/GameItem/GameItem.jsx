import React from 'react'
import { Link } from 'react-router-dom'

export default function GameItem({game}) {

return <div className='col-md-3 '>
    <Link className='HoverNo text-decoration-none text-second' to={`/gameDetails/${game.id}`}>
    <div className="itemContain bg-second rounded-1 pointer">
        <img src={game.thumbnail} className="w-100 rounded-top-1"  />
        <div className="cont p-3">
            <div className="d-flex justify-content-between"><h5>{game.title}</h5> 
            <button className='bg-third text-white rounded border-0'>free</button></div>
            <p className='text-muted'>{game.short_description.split(" ").splice(0,3).join(" ")}....</p>
            <div className="d-flex align-items-center justify-content-between"><i className='fas fa-plus-square'></i>
                <span><p className='d-inline bg-second rounded-pill text-main fw-bold fa-2xs p-1 me-2'>{game.genre}</p>
                {game.platform.split(" ").includes("PC")?<i className="fa-brands fa-windows"></i>:<i className="fas fa-window-maximize"></i>}</span></div>
        </div>
    </div>
    </Link>
  </div>
}
