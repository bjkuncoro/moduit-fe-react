import React from 'react'
import { useHistory } from 'react-router-dom'

const Landing = () => {
    const history = useHistory()
    const pindah    =()=>{
        history.push('/beranda')
    }
    return (
        <div>
            <h5>
                ini landing
            </h5>
            <button onClick={()=>pindah()} type="submit">ini tombol</button>
        </div>
    )
}

export default Landing
