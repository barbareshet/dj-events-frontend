import {FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { PER_PAGE } from "@/config/index";
function Pagination({page, total}) {
    const lastPage = Math.ceil(total / PER_PAGE)
    return (
        <div className="pagination">
            { page > 1 && (
                <Link href={`/events?page=${page - 1}`}>
                    <a className="btn-secondary"><FaAngleDoubleLeft/>&nbsp;Prev</a>
                </Link>
            )}

            { page < lastPage && (
                <Link href={`/events?page=${page + 1}`}>
                    <a className="btn-secondary">Next&nbsp;<FaAngleDoubleRight/></a>
                </Link>
            )}
        </div>
    )
}

export default Pagination