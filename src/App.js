import './App.css';
import Countries from './components/countries/countries';




function App() {
  return (
    <div className="App">
     <Countries></Countries>

    </div>
  );
}
// const LoadCountries = () => {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div >
//       <h1>Visiting All Countries</h1>
//       <h3>Available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// const Country = (props) => {
//   return (
//     <div className='countries-here'>
//       <h2>name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }




export default App;
