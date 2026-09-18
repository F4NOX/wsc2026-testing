import {useStore} from "../store.jsx";
import {useEffect, useRef, useState} from "react";

const PhotoSort = () => {

    const { photos, setPhotos } = useStore()

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    let grabRef= useRef()
    let targetRef = useRef()



    const orderMouseDown = idx => {
        grabRef.current = idx

        window.addEventListener("mousemove",orderMouseMove)
        window.addEventListener("mouseup",orderMouseUp)
    }

    const orderMouseOver = idx => {
        targetRef.current = idx
    }

    const orderMouseMove = e => {
        setX(prev => prev += e.movementX)
        setY(prev => prev += e.movementY)
    }

    const orderMouseUp = e => {
        e.preventDefault()

        if(grabRef.current != null && targetRef.current != null){
            let grab = grabRef.current;
            let target = targetRef.current;
            let temp = [...photos];
            [temp[grab], temp[target]] = [temp[target], temp[grab]]
            setPhotos(temp)
        }

        setX(0)
        setY(0)
        grabRef.current = null
        targetRef.current = null
        window.removeEventListener("mousemove",orderMouseMove)
        window.removeEventListener("mouseup",orderMouseUp)
    }

    useEffect(() => {
        return () => {
            window.removeEventListener("mousemove",orderMouseMove)
            window.removeEventListener("mouseup",orderMouseUp)
        }
    }, []);

    return (
        <div>
            <div className={'fw-bold'}>Photo Sorting</div>
            <div className={'vstack gap-2 mt-2'}>
                {photos.map((photo,i) => {
                    return (
                        <img
                            onMouseDown={() => orderMouseDown(i)}
                            onMouseOver={() => orderMouseOver(i)}
                            key={i}
                            src={photo.src}
                            className={'photo-sort card shadow-sm'}
                            style={{
                                position:grabRef.current == i ? 'relative' : 'static',
                                zIndex: grabRef.current == i ? 998 : 'auto',
                                pointerEvents: grabRef.current == i ? 'none' : 'auto',
                                transform: `translate(${grabRef.current == i ? x : 0}px,${grabRef.current == i ? y : 0}px)`
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PhotoSort