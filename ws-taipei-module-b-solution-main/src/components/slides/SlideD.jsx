import {useStore} from "../../store.jsx";
import '../../assets/css/d.css'
import {useEffect, useRef, useState} from "react";

const SlideD = () => {

    const { photos, currentIdx} = useStore()

    const [deg, setDeg] = useState(0)
    const [stack, setStack] = useState([])
    let timeoutRef = useRef()

    useEffect(() => {
        const randDeg = Math.floor(Math.random()*(5-(-5))) + (-5)
        setDeg(randDeg)
        setTimeout(() => {
            setStack(prev => {
                const obj = {
                    src: photos[currentIdx].src,
                    caption: photos[currentIdx].caption,
                    deg: randDeg
                }
                return [...prev,obj]
            })
        },500)
    }, [currentIdx]);

    return (
        <div
            style={{width:"95%",height:"90%"}}
            className={'slide-d bg-dark position-relative'}
        >
            {stack.map((s,i) => {
                return (
                    <div style={{ rotate:`${s.deg}deg` }} key={i} >
                        <img src={s.src} alt=""/>
                        <div className={'caption'}>{s.caption}</div>
                    </div>
                )
            })}
            {photos[currentIdx] &&
                <div style={{ rotate:`${deg}deg` }} key={currentIdx} className={'slide-in'}>
                    <img src={photos[currentIdx].src} alt=""/>
                    <div className={'caption'}>{photos[currentIdx].caption}</div>
                </div>
            }
        </div>
    )
};
export default SlideD