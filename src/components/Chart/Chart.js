import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    return (
        <div className="chart">
            { props.datapoints.map( datapoint => 
                (
                <ChartBar
                key={datapoint.label} //using label as unique identifier 
                value={datapoint.value} 
                maxValue={null} 
                label={datapoint.label} 
                />
                ))} 
        </div>
    );
}

export default Chart