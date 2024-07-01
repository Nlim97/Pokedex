import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLocation } from "react-router-dom";

function Stats (){
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
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={stats}
          options={options}
        />
      );
    
}

export default Stats;

