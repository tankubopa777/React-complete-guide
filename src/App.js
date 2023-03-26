import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  
  return (
    <div className="App">
      <h2>Let's make some fun</h2>
      <p>This is gonna be fun</p>
      <NewExpense/>
      <Expense />
      
    </div>
  );
}

export default App;
