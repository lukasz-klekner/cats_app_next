import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'

const Cat = () => {
  const [cat, setCat] = useState([])
  const router = useRouter()
  const { id } = router.query

  useEffect(async () => {
    ;(async () => {
      const res = await fetch(`/api/cats/${id}`)
      const data = await res.json()
      setCat(data)
    })()
  }, [id])

  return (
    <div>
      <Nav />
      {cat && (
        <div className='container mt-5' style={{ display: 'flex' }}>
          <img src={cat.image?.url} />
          <div className='mx-5'>
            <h1>{cat.name}</h1>
            <p>{cat.description} </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cat
