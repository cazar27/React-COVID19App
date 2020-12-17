// import React, {useState} from 'react';

// function countriesList(props) {
//   const countries = props.countries;
//   const listItems = countries.map((name) =>
//     <option value={name.toString()}>
//       {name}
//     </option>
//   );
//   return (
//     {listItems}
//   );
// }

// const selectCountries = ({countries}) => {
//   const [country] = useState(countries);

//   return (
//     <div className="container">
      
//       <div className="form-group">
//           <label for="select-countries">Elige un pais:</label>
//           <select className="form-control" name="select-countries" id="select-countries">
//             <countriesList countries={countries} />,
//           </select>
//       </div>
//     </div>
//   )
// };

// export default selectCountries;