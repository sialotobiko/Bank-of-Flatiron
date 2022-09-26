import React, {useState} from "react";

function AddTransactionForm({submitTransaction}) {
  
const [formDetails, setFormDetails] = useState({
  date:"",
  description:"",
  category:"",
  amount:0
})

function changeData(event){
  setFormDetails({...formDetails, [event.target.name]:event.target.value})
}

function submitData(event){
  event.preventDefault();
  submitTransaction({...formDetails})
     setFormDetails({
      date:"",
      description:"",
      category:"",
      amount:0
    })
}
  return (
    <div className="ui segment">
      <form className="ui form" onChange={changeData}>
        <div className="inline fields">
          <input value= {formDetails.date} type="date" name="date" />
          <input value= {formDetails.description} type="text" name="description" placeholder="Description" />
          <input value= {formDetails.category} type="text" name="category" placeholder="Category" />
          <input value= {formDetails.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit" onClick= {submitData}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
