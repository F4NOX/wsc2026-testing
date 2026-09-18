import {useStore} from "../../store.jsx";
import '../../assets/css/e.css'
import {useEffect, useRef, useState} from "react";

const SlideE = () => {

    const { photos, currentIdx, prevIdx } = useStore()

    const [transitioning, setTransitioning] = useState()

    let tempRef = useRef()
    let timeoutRef = useRef()

    useEffect(() => {
        setTransitioning(true)
        tempRef.current.style.display = 'block'
        setTimeout(() => tempRef.current.style.display = 'none',100)
        timeoutRef.current = setTimeout(() => {
            setTransitioning(false)
        },400)

        return () => clearTimeout(timeoutRef.current)
    }, [currentIdx]);

    return (
        <div
            style={{width:"95%",height:"90%"}}
            className={'slide-e bg-dark position-relative'}
        >
            <div ref={tempRef} style={{ zIndex:998, display:"block" }}>
                <img src={photos[prevIdx]?.src} alt=""/>
                <div className={'caption'}>{photos[prevIdx]?.caption}</div>
            </div>
            {photos[prevIdx] && transitioning &&
                <>
                    <div className={'slide-out left'}>
                        <img src={photos[prevIdx].src} alt=""/>
                        <div className={'caption'}>{photos[prevIdx].caption}</div>
                    </div>
                    <div className={'slide-out right'}>
                        <img src={photos[prevIdx].src} alt=""/>
                        <div className={'caption'}>{photos[prevIdx].caption}</div>
                    </div>
                </>
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
export default SlideE