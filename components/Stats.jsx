import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLocation, useNavigate } from "react-router-dom";

function Stats (){
    const navigate = useNavigate()
    const location = useLocation()
    const [stats, setStats] = useState([])
    const options = {
        title: `${location.state.data.name}'s base stats`,
        chartArea: { width: "50%" },
        hAxis: {
          title: "Base stat",
          minValue: 0,
        },
        vAxis: {
          title: "Stat name",
        },
      };
    useEffect(() =>{
        if(location.state.data.stats){
            const statArray = location.state.data.stats.map(statItem => [statItem.stat.name, statItem.base_stat]);
            setStats([["pokemon", "base stats"], ...statArray])
        }
        
    },[location])

    return (
      <div className="stats">
        <img src={location.state.data.sprites.other.dream_world.front_default}/>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={stats}
          options={options}
        />
        <button onClick={() => { navigate('/')}}>Home</button>
      </div>
        
      );
    
}

export default Stats;

