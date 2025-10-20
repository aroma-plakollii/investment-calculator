import Input from "./Input";

const InvestmentParameters = ({investment, handleChange}) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <Input labelName='Initial Investment' inputName={'initialInvestment'} investment={investment} onHandleChange={handleChange} />
                <Input labelName='Annual Investment' inputName={'annualInvestment'} investment={investment} onHandleChange={handleChange} />
            </div>
            <div className="input-group">
                <Input labelName='Expected Return' inputName={'expectedReturn'} investment={investment} onHandleChange={handleChange} />
                <Input labelName='Duration' inputName={'duration'} investment={investment} onHandleChange={handleChange} />
            </div>
        </section>
    )
}

export default InvestmentParameters;