import "./filterOptions.css";


function FilterOptions({ onDateChange, onRateChange }) {
    return (
        <form className="filter-contatiner">

            <label htmlFor="date" className="filter__label">Time Periods:</label>
            <select name="date" id="date" className="filter__select" onChange={onDateChange}>
                <option value="">--Please choose an option--</option>
                <option value="lastWeek">Last Week</option>
                <option value="lastMonth">Last Month</option>
                <option value="last3Months">Last 3 Months</option>
                <option value="last6Months">Last 6 Months</option>
                <option value="lastYear">Last Year</option>

            </select>

            <label htmlFor="rate" className="filter__label">Rate:</label>
            <select name="rate" id="rate" className="filter__select" onChange={onRateChange}>
                <option value="">--Please choose an option--</option>
                <option value="morethan9">More Than 9.0</option>
                <option value="between8and9">8.0 to 9.0</option>
                <option value="between7and8">7.0 to 8.0</option>
                <option value="between6and7">6.0 to 7.0</option>
                <option value="lessthan6">Less Than 6.0</option>
            </select>


        </form >
    );
}

export default FilterOptions;
