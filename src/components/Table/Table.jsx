import React from 'react';
import ButtonTitle from "../UI/ButtonTitle/ButtonTitle";
import s from './Table.module.css'
import Loader from "../UI/Loader/Loader";

const Table = ({comments, sortData, whatSort, loader}) => {

    return (
        <div>
            {loader
                ? <span className={s.loaderContainer}><Loader/></span>
                : <table>
                    <caption className={s.caption}>List a comments</caption>
                    <thead >
                    <tr>
                        {whatSort.map(el =>
                            <th scope="col" key={el.value}>
                                <ButtonTitle value={el.value} sortData={sortData}>
                                    {el.value}
                                </ButtonTitle>
                            </th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map(comment =>
                        <tr key={comment.id}>
                            <td className={s.td}>{comment.id}</td>
                            <td className={s.td}>{comment.name}</td>
                            <td className={s.td}>{comment.email}</td>
                            <td className={s.td}>{comment.body}</td>
                        </tr>
                    )}
                    </tbody>
                </table> }

        </div>
    );
};

export default Table;