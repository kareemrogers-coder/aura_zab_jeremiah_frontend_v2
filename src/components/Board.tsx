import React, { useState } from 'react'
import Profiles from './Profiles';
import { Leaderboard } from './DataBase';

export default function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className="md:container md:mx-auto text-xl bg-[#124f6d] pt-4 pl-4 text-white">
        <h1 className='p-2 text-2xl'>AURA Logo Leaderboard</h1>

        <div className="duration">
            <button onClick={handleClick} className='pr-4' data-id='7'>7 Days</button>
            <button onClick={handleClick} className='pr-4' data-id='30'>30 Days</button>
            <button onClick={handleClick} className='pr-4' data-id='0'>All-Time</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div>
  )
}



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}



