import { useEffect, useState } from "react";
import Comments from "./Comments";
import data from './data.json';


const Container = () => {
    
    const [dataJson, setDataJson] = useState({});
    
    useEffect(() => {
        /*async function getData(){
            const res = await fetch('./data.json');
            const data = await res.json();
            setDataJson(data);
        }

        getData(); */
        setDataJson(data);
    }, []);
    return ( 
        <div className="container">
            <Comments dataJson={dataJson}/>
            
        </div>
    );
}
 
export default Container;