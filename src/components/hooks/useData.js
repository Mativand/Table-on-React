// export const useSortedData = (data, setStateSort, setSortedData, optionSort, setOptionSort) => {
//     const sortData = (sort) => {
//         setStateSort(sort)
//         setSortedData([...data].sort((a, b) => {
//             if (optionSort === 'asc') {
//                 setOptionSort('desc')
//                 if (sort === 'id') {
//                     return a[sort] - b[sort]
//                 } else {
//                     return a[sort].localeCompare(b[sort])
//                 }
//             } else if (optionSort === 'desc') {
//                 setOptionSort('asc')
//                 if (sort === 'id') {
//                     return b[sort] - a[sort]
//                 } else {
//                     return b[sort].localeCompare(a[sort])
//                 }
//             }
//         }))
//     }
// }