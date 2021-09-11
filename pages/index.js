import Link from "next/link";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
export default function Home( {events} ) {
    // will display in the client side - FE rendering
    // console.log(events);
  return (
    <Layout title="DJ Events App - Home page">
        <div>
            <h1>Upcoming DJ Events</h1>
        </div>
        {events.length < 1 && <h3>No events to show</h3>}
        {events.map((evt) => (
            <EventItem key={evt.id} evt={evt} />
        ))}

        {events.length > 0 && (
            <div>
                <Link href="/events">
                    <a className="btn-secondary">View All Events</a>
                </Link>
            </div>
        )}
    </Layout>
  )
}

export async function getServerSideProps(){
    const res = await fetch(`${ API_URL }/events?_sort=date:ASC&_limit=3`)
    const events = await res.json()
    // Will display in the terminal - server side rendering
    // console.log(events);
    return {
        props: { events },

    }
}