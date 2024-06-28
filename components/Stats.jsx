import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Stats (){
    const location = useLocation()
    const [stats, setStats] = useState([])
    useEffect(() =>{
        if(location.state.data.stats){
            setStats(location.state.data.stats)
        }
        
    },[location])
    
    return(
        <div>
            {stats.map((stat, index) => {
                return (
                    <div key={index}>
                        <p>{stat.stat.name}</p>
                        <p>{stat.base_stat}</p> 
                    </div>
                )
            })}
        </div>
    )
}

export default Stats;

