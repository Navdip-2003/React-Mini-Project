import { useState } from "react";
import MenuList from "./Menu-list";

export default function MenuItem({ item }) {
    const [dispCurrentChildren, setdispCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel){
        setdispCurrentChildren({
            ...dispCurrentChildren , 
            [getCurrentLabel] : !dispCurrentChildren[getCurrentLabel] 
        })
    }

    return (
        <li>
            <div style={{ display: 'flex', alignItems: 'center' , gap :'10px'}}>
                <p style={{ margin: 0 }}>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => handleToggleChildren(item.label)} style={{ marginLeft: '5px',cursor : 'pointer' }}>{dispCurrentChildren[item.label] ? "-" : "+" }</span>
                    : null
                }
            </div>
            
            {
                item && item.children && item.children.length > 0 && dispCurrentChildren[item.label]?
                    <MenuList list={item.children} />
                : null 
            }
        </li>
    );
}
