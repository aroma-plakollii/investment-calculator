import { formatter } from "../util/investment";

const ResultsTable = ({investmentResults}) => {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map((results, index) => (
                    <tr key={index}>
                        <td>{results.year}</td>
                        <td>{formatter.format(results.valueEndOfYear)}</td>
                        <td>{formatter.format(results.interest)}</td>
                        <td>{formatter.format(results.totalInterest)}</td>
                        <td>{formatter.format(results.valueEndOfYear + results.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultsTable;