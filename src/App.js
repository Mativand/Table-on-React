import './App.css';
import ButtonPage from "./components/UI/ButtonPage/ButtonPage";
import Table from "./components/Table/Table";
import React, {useEffect, useMemo, useState} from "react";
import PostService from "./API/Service";
import Settings from "./components/Settings/Settings";

function App() {
    const [data, setData] = useState([])
    const [defaultData, setDefaultData] = useState([])
    const [search, setSearch] = useState('')
    const [optionSort, setOptionSort] = useState('asc')
    const [sortedData, setSortedData] = useState([])

    async function fetchData() {
        const comments = await PostService.getAll()
        setData(comments)
        setDefaultData(comments)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const sortData = (sort) => {
        setSortedData([...data].sort((a, b) => {
            if (optionSort === 'asc') {
                setOptionSort('desc')
                if (sort === 'id') {
                    return a[sort] - b[sort]
                } else {
                    return a[sort].localeCompare(b[sort])
                }
            } else if (optionSort === 'desc') {
                setOptionSort('asc')
                if (sort === 'id') {
                    return b[sort] - a[sort]
                } else {
                    return b[sort].localeCompare(a[sort])
                }
            }
        }))
        setData(sortedData)
    }

    useMemo(() => {
        if (sortedData.length === 0){
            setData(defaultData.filter(el => {
                
                el.name.toLowerCase().includes(search)
            }))
        } else {
            setData(sortedData.filter(el => el.name.toLowerCase().includes(search)))

        }
    }, [search, sortedData])

    return (
        <div className="App">
            <Settings value={search} setValue={setSearch}/>
            <Table
                comments={data}
                sortData={sortData}
                whatSort={[
                    {value: 'id'}, {value: 'name'}, {value: 'email'}, {value: 'body'}
                ]}
            />
            <ButtonPage/>
        </div>
    );
}

export default App;
