import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link
            href={props.link}
            className='d-flex align-items-center text-center gap-2 py-1 text-decoration-none text-reset text-nowrap'>
            {props.children}
        </Link>
    )
}