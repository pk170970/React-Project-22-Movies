import React  from 'react'
import { useGlobalContext } from './context'


const SingleForm = () => {
  const { setSearch, search,error } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Movies</h2>
      <input value={search} type="text" className='form-input' onChange={(e)=>setSearch(e.target.value)} />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}

export default SingleForm