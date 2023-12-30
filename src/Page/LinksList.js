import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { AddLink,ClearLink,loadLinkThunk} from "../Redux/Link/action";

 
export const LinksList = () => {

    const links = useSelector((state) => state.linksStore.linkList);
    const dispatch = useDispatch();  // Create a `dispatch` function
    console.log(links)
    return (
        <div>
            <button onClick={() =>
                dispatch(
                    AddLink()
                )
            }>New Link</button>

            <button onClick={() =>
                dispatch(
                    ClearLink()
                )
            }>Clear</button>
            <button
             onClick={() => {
                dispatch(loadLinkThunk());
                }}
            >Add Api</button>
            
            

            {links.map((l, i) => (
                <div key={i}>{l.title} - {l.url}</div>
            ))}

        </div>

    );

}