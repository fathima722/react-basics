import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Card(props: { h2: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; h3: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
    <div className='card-details'>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
    </div>
    );
}