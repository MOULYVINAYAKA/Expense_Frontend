

const Balance = (props) => {
  let {income,expense} = props;


  let balance = income + expense;
  return (
    <>
    <div>
      {/* <div>Expense Tracker</div>   */}
      <div className="balance">Balance: {balance}</div>
      <div className="income-expense-container">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Balance 




