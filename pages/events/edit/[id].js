import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css"
import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import 'react-toastify/dist/ReactToastify.min.css';
import Image from "next/image";
import {FaImage} from "react-icons/fa";

function EditEventPage({evt}) {

    const [values, setValues] = useState({
        name:evt.name,
        venue:evt.venue,
        address:evt.address,
        performers:evt.performers,
        date:evt.date,
        time:evt.time,
        description:evt.description
    })
    const [imagePreview, setImagePreview] = useState(evt.image ? evt.image.formats.thumbnail.url : null )
    const [showModal, setShowModal] = useState( false );
    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(values);

        //form Validation
        const hasEmptyFields = Object.values(values).some(
            (element) => element === '')
        if ( hasEmptyFields){
            toast.error('please fill in all fields');
        }
        const res = await fetch(`${API_URL}/events/${evt.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        if ( !res.ok ){
            toast.error('Something went wrong')
        } else {
            const evt = await res.json();
            router.push(`/events/${evt.slug}`)
        }
    }
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setValues({...values, [name]:value});
    }
    const imageUploaded = async (e) => {
        const res = await fetch(`${API_URL}/events/${evt.id}`)
        const data = await res.json()
        // console.log(data);
        setImagePreview(data.image.formats.thumbnail.url)
        setShowModal(false)
    }
    return (
        <Layout title="Edit Event">
            <GoBackButton/>
            <h1>Edit Event</h1>
            <ToastContainer />
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
                               value={moment(values.date).format('yyyy-MM-DD')}
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
                <input type="submit" className="btn" value="Update Event"/>
            </form>
            <h2>Event Image</h2>
            {imagePreview ? (
                <Image src={imagePreview} height={100} width={170} />
            ) : (
                <div>
                    No image yet...
                </div>
                )}
            <div>
                <button className="btn-secondary" onClick={() => setShowModal(true)}>
                    <FaImage/> Set Image
                </button>
                <Modal show={showModal} onClose={ () => setShowModal(false)} title="Image Upload">
                    <ImageUpload evtId={evt.id} imageUploaded={imageUploaded}/>
                </Modal>
            </div>
        </Layout>
    )
}

export default EditEventPage

export async function getServerSideProps({params:{id}}){
    const res = await fetch(`${API_URL}/events/${id}`);
    const evt = await res.json();

    return {
        props: {
            evt
        }
    }
}