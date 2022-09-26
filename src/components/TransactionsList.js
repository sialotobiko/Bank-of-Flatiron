import React, {useEffect, useState} from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {

  const [transactions1, setTransactions] = useState([])

  function getTransactions(){
    useEffect( () => {fetch ("http://localhost:8001/transactions")
    .then ((response) => response.json())
    .then ((data) => {setTransactions(data)})
    },[])
    console.log(transactions1);
      }
      getTransactions();

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions1.map(transaction => {
          return <Transaction date= {transaction.date} 
          description={transaction.description} 
          category= {transaction.category} 
          amount={transaction.amount} 
          key= {transaction.id}/>
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
