import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const dataPoints = props.datapoint.map(datapoints => datapoints.value)
    const totalMaximum = Math.max(...dataPoints)


    return (
        <div className="chart">
            { props.datapoints.map( datapoint => 
                (
                <ChartBar
                key={datapoint.label} //using label as unique identifier 
                value={datapoint.value} 
                maxValue={totalMaximum} 
                label={datapoint.label} 
                />
                ))} 
        </div>
    );
}

export default Chart