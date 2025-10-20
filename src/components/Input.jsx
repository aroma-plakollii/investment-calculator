const Input = ({labelName, inputName, investment, onHandleChange}) => {
    
    return (
        <p>
            <label>{labelName}</label>
            <input type="number" required value={investment[inputName]} onChange={(e) => onHandleChange(`${inputName}`, e.target.value)} />
        </p>
    )
}

export default Input;