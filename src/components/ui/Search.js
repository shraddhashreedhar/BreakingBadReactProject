import { getSuggestedQuery } from '@testing-library/react'
import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text,setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)

    }

    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Search any character'
                value={text} onChange={(e) => onChange(e.target.value)}
                autoFocus></input>
            </form>
            
        </section>
    )
}

export default Search
