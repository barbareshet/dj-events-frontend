import { API_URL, PER_PAGE } from "@/config/index";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";

export default function EventsPage( {events, total, page} ) {



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

            <Pagination total={total} page={page}/>
        </Layout>
    )
}

export async function getServerSideProps({query:{page= 1 }}){
    //calculate start page
    const start = +page === 1 ? 0 : (+page-1) * PER_PAGE
    //fetch total count of events
    const totalRes = await fetch(`${ API_URL }/events/count`)
    const total = await totalRes.json()
    //fetch the events
    const eventsRes = await fetch(`${ API_URL }/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
    const events = await eventsRes.json()
    // Will display in the terminal - server side rendering
    // console.log(events);
    return {
        props: {
            events,
            page: +page,
            total
        },

    }
}