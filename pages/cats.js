import { useEffect, useState } from 'react'

import Card from '../components/Card'
import Nav from '../components/Nav'
import DefaultLayout from '../layouts/Default'

const Cats = () => {
  const [cats, setCats] = useState([])

  useEffect(async () => {
    ;(async () => {
      const res = await fetch('api/cats')
      const data = await res.json()
      setCats(data)
    })()
  }, [])

  return (
    <>
      <DefaultLayout>
        <div className='container mt-5'>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            {cats.map((cat) => (
              <Card
                key={cat.id}
                name={cat.name}
                id={cat.id}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default Cats
