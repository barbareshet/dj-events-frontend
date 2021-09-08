
import Link from "next/link";
import {FaAngleDoubleLeft} from "react-icons/fa";

function GoBackButton() {

    return (
        <Link href="/events">
            <a className="back">
                <FaAngleDoubleLeft/> Back to all events
            </a>
        </Link>
    )
}

export default GoBackButton