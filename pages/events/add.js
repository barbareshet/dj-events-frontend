import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css"
import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";


function AddEventPage() {

    const [values, setValues] = useState({
        name:"",
        venue:"",
        address:"",
        performers:"",
        date:"",
        time:"",
        description:""
    })
    const router = useRouter();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(values);
    }
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setValues({...values, [name]:value});
    }
    return (
        <Layout title="Add New Event">
            <GoBackButton/>
            <h1>Add Event</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Event name</label>
                        <input type="text"
                               name="name"
                               id="name"
                               value={values.name}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Event venue</label>
                        <input type="text"
                               name="venue"
                               id="venue"
                               value={values.venue}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Event address</label>
                        <input type="text"
                               name="address"
                               id="address"
                               value={values.address}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Event performers</label>
                        <input type="text"
                               name="performers"
                               id="performers"
                               value={values.performers}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Event date</label>
                        <input type="date"
                               name="date"
                               id="date"
                               value={values.date}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Event time</label>
                        <input type="text"
                               name="time"
                               id="time"
                               value={values.time}
                               onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="description">Event description</label>
                    <textarea name="description"
                              id="description"
                              cols="30"
                              rows="10"
                              value={values.description}
                              onChange={handleInputChange}
                    ></textarea>
                </div>
                <input type="submit" className="btn" value="Add Event"/>
            </form>
        </Layout>
    )
}

export default AddEventPage