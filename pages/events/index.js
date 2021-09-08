import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";

export default function EventsPage( {events} ) {
    // will display in the client side - FE rendering
    // console.log(events);
    return (
        <Layout title="DJ Events App - EventsPage page">
            <div>
                <h1>All DJ Events</h1>
            </div>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    )
}

export async function getServerSideProps(){
    const res = await fetch(`${ API_URL }/events?_sort=date:ASC`)
    const events = await res.json()
    // Will display in the terminal - server side rendering
    // console.log(events);
    return {
        props: { events },

    }
}