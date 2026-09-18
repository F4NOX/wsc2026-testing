import {useStore} from "../../store.jsx";
import '../../assets/css/f.css'
import {useEffect, useRef, useState} from "react";

const SlideF = () => {

    const { photos, currentIdx, prevIdx } = useStore()

    const [transitioning, setTransitioning] = useState()

    let timeoutRef = useRef()

    useEffect(() => {

        setTransitioning(true)
        timeoutRef.current = setTimeout(() => {
            setTransitioning(false)
        },600)

        return () => clearTimeout(timeoutRef.current)
    }, [currentIdx]);

    return (
        <div
            style={{width:"95%",height:"90%"}}
            className={'slide-f bg-dark position-relative'}
        >
            {photos[prevIdx] && transitioning &&
                <div className={'slide-out'}>
                    <img src={photos[prevIdx].src} alt=""/>
                    <div className={'caption'}>{photos[prevIdx].caption}</div>
                </div>
            }
            {photos[currentIdx] &&
                <div key={currentIdx} className={'slide-in'}>
                    <img src={photos[currentIdx].src} alt=""/>
                    <div className={'caption'}>{photos[currentIdx].caption}</div>
                </div>
            }
        </div>
    )
};
export default SlideF