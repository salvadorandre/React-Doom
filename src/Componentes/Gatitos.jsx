import { useRef } from "react";
import "./Gatitos.css"; 
const CatFriends = () => { 
    
    const firstCatRef = useRef(null); 
    const secondCatRef = useRef(null); 
    const thirdCatRef = useRef(null); 

    const handleScrollFirstCat = () => { 
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center'
        }); 
    }; 

    const handleScrollSecondCat = () => { 
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center'
        }); 
    };

    const handleScrollThirdCat = () => { 
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center'
        }); 
    };

    return (
        <>
            <nav>
                <button onClick={handleScrollFirstCat}>
                    TOM
                </button>
                <button onClick={handleScrollSecondCat}>
                    MARU
                </button>
                <button onClick={handleScrollThirdCat}>
                    Jellylorum
                </button>
            </nav>
            <div className="contenedor-gatitos">
                <ul>
                    <li><img src="https://placekitten.com/g/200/200" alt="" ref={firstCatRef}/></li>
                    <li><img src="https://placekitten.com/g/300/200" alt="" ref={secondCatRef} /></li>
                    <li><img src="https://placekitten.com/g/250/200" alt="" ref={thirdCatRef} /></li>
                </ul>
            </div>
        </>
    ); 
}; 

export default CatFriends; 