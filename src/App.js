import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const addExpenseHandler = Expense => {
  console.log('In App.js');
  console.log(Expense);
};
function App() {
  
  return (
    <div className="App">
      <h2>Let's make some fun</h2>
      <p>This is gonna be fun</p>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense item={Expense}/>
      
    </div>
  );
}

export default App;
