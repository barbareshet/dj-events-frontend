import React from "react";
import Layout from "@/components/Layout";
import {parseCookie} from "@/helpers/index";
import {API_URL} from "@/config/index";


export default function Dashboard({events}) {
    console.log(events);
    return (
        <Layout title="Events Dashboard">
            <h1>Events Dashboard</h1>
        </Layout>
    )
}

export async function getServerSideProps({req}){
    const {token}  = parseCookie(req);

    // console.log(token);

    const res = await fetch(`${API_URL}/events/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const events = await res.json();

    return {
        props: {
            events
        }
    }
}