import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const dataPointValue = props.dataPoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...dataPointValue)


    return (
        <div className="chart">
            { props.dataPoints.map( (datapoint) => 
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