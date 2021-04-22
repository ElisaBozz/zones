// import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';

// function NewZone() {

//     const [data, setData] = useState([]);
//     const myApi = 'https://geo.api.gouv.fr/communes'
//     useEffect(() => {
//         const fetchDatas = async () => {

//             const result = await axios(
//                 myApi,
//             );
//             setData(result.data)
//         };
//         fetchDatas();
//     }, [])


//     return (
//         <div>

//             <select required >
//                 {data.map((item, key) => (
//                     <option key={key}>
//                         {item.nom}
//                     </option>
//                 ))}

//             </select>

//         </div>
//     )
// }

// export default NewZone