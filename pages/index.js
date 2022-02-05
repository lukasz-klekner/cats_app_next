import Jumbotron from '../components/Jumbotron'
import Nav from '../components/Nav'
import DefaultLayout from '../layouts/Default'

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <Jumbotron />
      </DefaultLayout>
    </main>
  )
}
