import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import getTransactions from "./TransactionsList"
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import { bodyParser } from "json-server";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  
  // function getTransactions(){
  //   fetch ("http://localhost:8001/transactions")
  //   .then ((response) => response.json())
  //   .then ((data) => {
  //     setTransactions(data);
  //   })
  //   }
  //   useEffect(getTransactions, []);

  function postData(newTrans){
    setTransactions([...transactions, newTrans])
    fetch ("http://localhost:8001/transactions", {
    method: "POST",
    body: JSON.stringify(newTrans),
    headers: {
      "Content-Type": "application/json"}
    })
    console.log(JSON.stringify(newTrans))
  }
  
  function searchData(search){
    if (search === ""){
      getTransactions(transactions)
    }else {
      const searchTrans = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
      })
      setTransactions(searchTrans)
    }
  }

  return (
    <div>
      <Search searchData={searchData} />
      <AddTransactionForm submitTransaction={postData} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
