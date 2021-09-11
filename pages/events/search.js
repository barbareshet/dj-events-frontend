import qs from "qs";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import GoBackButton from "@/components/GoBackButton";
export default function SearchPage( {events} ) {
    // will display in the client side - FE rendering
    // console.log(events);
    const router = useRouter();
    return (
        <Layout title="DJ Events App - Search Results">
            <div>
                <GoBackButton/>
                <h1>Search results for: {router.query.term}</h1>
            </div>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    )
}

export async function getServerSideProps({query: {term}}){
    //search by single param
    // const res = await fetch(`${ API_URL }/events?name_contains=${term}`)
    const query = qs.stringify({
        _where:{
            _or: [
                { name_contains: term },
                { performers_contains: term },
                { description_contains: term },
                { venue_contains: term },
            ]
        }
    })
    const res = await fetch(`${ API_URL }/events?${query}`)
    const events = await res.json()
    // Will display in the terminal - server side rendering
    // console.log(events);
    return {
        props: { events },
    }
}