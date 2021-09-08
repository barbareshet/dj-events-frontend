import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({events}) {
    // will display in the client side - FE rendering
    // console.log(events);
  return (
    <Layout title="DJ Events App - Home page">
        <div>
            <h1>Upcoming DJ Events</h1>
        </div>
    </Layout>
  )
}

export async function getServerSideProps(){
    const res = await fetch(`${ API_URL }/api/events`)
    const events = await res.json()
    // Will display in the terminal - server side rendering
    // console.log(events);
    return {
        props:{
            events
        },
        revalidate: 1 // will run if data is changed, to fetch new events
    }
}