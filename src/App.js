import './App.css';
import Table from "./components/Table/Table";
import React, {useEffect, useMemo, useState} from "react";
import PostService from "./API/Service";
import Settings from "./components/Settings/Settings";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {
    const [data, setData] = useState([])
    const [defaultData, setDefaultData] = useState([])
    const [search, setSearch] = useState('')
    const [optionSort, setOptionSort] = useState('asc')
    const [sortedData, setSortedData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(50)
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(false)

    async function fetchData() {
        setLoader(true)
        const response = await PostService.getAll(limit, page)
        setData(response.data)
        setDefaultData(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setLoader(false)
    }

    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchData()
    }, [page])

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

    const isContains = (obj) => {
        let values = Object.values(obj);
        for (let i = 0; i < values.length; i++) {
            if (String(values[i]).toLowerCase().includes(search)) {
                return true
            }
        }
        return false
    }

    useMemo(() => {
        if (sortedData.length === 0) {
            setData(defaultData.filter(el => isContains(el)))
        } else {
            setData(sortedData.filter(el => isContains(el)))
        }
    }, [search, sortedData])

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <Settings value={search} setValue={setSearch} changePage={changePage} pagesArray={pagesArray}/>
            <Table
                comments={data}
                sortData={sortData}
                loader={loader}
                whatSort={[
                    {value: 'id'}, {value: 'name'}, {value: 'email'}, {value: 'body'}
                ]}
            />
        </div>
    );
}

export default App;
