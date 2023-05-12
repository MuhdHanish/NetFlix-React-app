import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {imgUrl} from '../../constance/constance'
import "./RowPost.css"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
   axios.get(props.gener).then((response)=>{
    setMovies(response.data.results)
   })
  })

  return (
    <div className='row' >
      <h2>{props.title}</h2>
     <div className="posters">
     {
        movies.map((obj)=>
          <img key={obj.id} className={props.isSmall ?'smallPoster':'poster' } src={`${imgUrl+obj.backdrop_path}`} alt="poster" />
        )
      }
     </div>
    </div>
  )
}

export default RowPost