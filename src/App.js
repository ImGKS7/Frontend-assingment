import './App.css';
import data from './studentsData.json'

function App() {
  return (
    <div className="App">
    <div className='search'>
      <input placeholder='Search' type='text'/>
      <button>Search</button>
     { console.log(data)}
    </div>
    </div>
  );
}

export default App;

// Steps to complete the test successfully
// Center the search bar and style the button according to input bar.
// Integrate a JSON file into the search bar so that search results can be dynamically populated.
// Write code to populate data below the search bar based on a search of ID name.
// Test your code thoroughly to ensure that it works as expected.
// Submit your completed test for grading.
// Note: Be sure to follow best practices for coding, including properly commenting your code and organizing it in a way that is easy to read  and understand.