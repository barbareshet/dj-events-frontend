import Link from "next/link"
import Image from "next/image"
import { FaPencilAlt, FaTimes, FaAngleDoubleLeft } from "react-icons/fa"
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import styles from "@/styles/SingleEvent.module.css"
const EventPage = ({evt}) => {
    const deleteEvent = (e) => {
        console.log('delete');
    }
    return(
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Events
                        </a>
                    </Link>
                    <a href="#" className={styles.delete} onClick={deleteEvent}>
                        <FaTimes/> Delete Event
                    </a>
                </div>
                <span>
                    {evt.date} at {evt.time}
                </span>
                <h1>{evt.title}</h1>
                {evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image} width={960} height={600} />
                    </div>
                )}
                <h3>Performers:</h3>
                <p>{evt.performers}</p>
                <h3>Description:</h3>
                <p>{evt.description}</p>
                <h3>Venue:</h3>
                <p>{evt.address}</p>

                <Link href="/events">
                    <a className={styles.back}>
                       <FaAngleDoubleLeft/> Back to all events
                    </a>
                </Link>
            </div>
        </Layout>
    )
}
export default EventPage

// getStaticProps need to work along with getStaticPaths to get the paths from the server, and than iterate them to the client
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json()

    return {
        props: {
            evt: events[0],
        },
    }
}