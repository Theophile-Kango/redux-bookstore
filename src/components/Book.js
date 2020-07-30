import React from 'react';

export default function Book({ id, title, category}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
        </tr>
    )
}

