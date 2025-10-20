const Input = ({labelName, inputName, investment, onHandleChange}) => {
    
    return (
        <p>
            <label>{labelName}</label>
            <input type="number" value={investment[inputName]} onChange={(e) => onHandleChange(e, `${inputName}`)} />
        </p>
    )
}

export default Input;