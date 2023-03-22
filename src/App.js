import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Toilet Paper', 
    amount: 94.12, 
    date: new Date(2021, 2, 28) 
  },
    {title: 'Car Insurance', 
    amount: 294.67, 
    date: new Date(2021, 4, 28) 
  },
    {title: 'Keyborad', 
    amount: 68.67, 
    date: new Date(2021, 9, 28) 
  },
    {title: 'Pen', 
    amount: 2.57, 
    date: new Date(2021, 10, 28) }
  ]
  return (
    <div className="App">
      <h2>Let's make some fun</h2>
      <p>This is gonna be fun</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].title} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].title} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].title} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].title} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
