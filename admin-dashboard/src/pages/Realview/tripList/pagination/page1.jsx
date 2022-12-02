import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd';

export default function Page1(TLdata) {
    const [post, setPost] = useState([]);
    const [total, setTotal] = useState('');
    const [page, setPage] = useState(1);
    const [postperpage, setPostperPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');


    function loadpage() {
        // TLdata.TLdata.map((d) => {
        setPost(TLdata.TLdata)
        setTotal(Object.entries(TLdata.TLdata).length)
        console.log(Object.entries(TLdata.TLdata).length);
        // })
    }

    useEffect(() => {
        loadpage();
    }, []);

    const indexOfLastPage = page + postperpage
    const indexOfFirstPage = indexOfLastPage - postperpage
    const currentPosts = post.slice(indexOfFirstPage, indexOfLastPage)

    const onShowSizeChange = (current, pagesize) => {
        setPostperPage(pagesize)
    }

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>
        }
        if (type === 'next') {
            return <a>Next</a>
        }
        return originalElement
    }
    return (
        <div>

            {
                currentPosts.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.gpsdatetime.toString().includes(searchTerm.toLocaleLowerCase())) {
                        console.log(val);
                        return val
                    }
                }).map((p, i) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: 17 }}>
                            <h2>{i + 1}</h2>
                            <h4>{p.state}</h4>
                            <h4>{p.streetview}</h4>
                            <h4>{p.longitude}</h4>
                            <h4>{p.latitude}</h4>
                            <h4>{p.altitude}</h4>
                            <h4>{p.gpsdatetime}</h4>
                        </div>
                    )
                })
            }<br></br>
            <hr></hr>
            <input type="text" onChange={(e) => { setSearchTerm(e.target.value) }}></input>
            <br></br>
            <Pagination
                onChange={(value) => setPage(value)}
                pageSize={postperpage}
                total={total}
                current={page}
                showSizeChanger
                showQuickJumper
                onShowSizeChange={onShowSizeChange}
                itemRender={itemRender}

            ></Pagination>
        </div>
    )
}
