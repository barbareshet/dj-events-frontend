import { useState } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

function ImageUpload({evtId, imageUploaded}) {

    const [image, setImage] = useState(null);

    const handleModalFormSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append('files', image);
        formData.append('ref', "events");
        formData.append('refID', evtId);
        formData.append('field', "image");

        const res = await fetch(`${API_URL}/upload`, {
            method: "POST",
            body: formData,
        });
        // console.log(formData);
        if ( res.ok ){
            imageUploaded();
        }

    }
    const handleFileChange = (e) =>{

        setImage(e.target.files[0]);
        // console.log(e.target.files[0]);
    }
    return (
        <div className={styles.form}>
            <h1>Upload / Update event Image</h1>
            <form onSubmit={handleModalFormSubmit}>
                <div className={styles.file}>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                <input type="submit" value="upload" className="btn"/>
            </form>
        </div>
    )
}

export default ImageUpload