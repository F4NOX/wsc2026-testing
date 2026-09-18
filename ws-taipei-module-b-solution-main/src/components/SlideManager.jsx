import {useStore} from "../store.jsx";
import {useEffect, useRef, useState} from "react";

const SlideManager = () => {
    const { photos, mode, theme, setCurrentIdx, setPrevIdx } = useStore()
    let interval = 2000
    let intervalRef = useRef()
    const [keydown, setKeydown] = useState(false)

    const slideInit = () => {
        clearInterval(intervalRef.current)

        window.removeEventListener('keydown',slideKeydown)
        window.removeEventListener('keyup',slideKeyup)
    }

    const manualSlideStart = () => {
        window.addEventListener('keydown',slideKeydown)
        window.addEventListener('keyup',slideKeyup)
    }

    const autoSlideStart = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIdx(prev => {
                setPrevIdx(prev)
                return (prev + 1) % photos.length
            })
        },interval)
    }

    const randomSlideStart = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIdx(prev => {
                setPrevIdx(prev)
                return Math.floor(Math.random()*photos.length)
            })
        },interval)
    }

    const slideKeydown = e => {
        if(keydown)return
        setKeydown(true)

        if(e.key == "ArrowRight"){
            setCurrentIdx(prev => {
                setPrevIdx(prev)
                return (prev + 1) % photos.length
            })
        }

        if(e.key == "ArrowLeft"){
            setCurrentIdx(prev => {
                setPrevIdx(prev)
                return (prev - 1 + photos.length) % photos.length
            })
        }
    }
    const slideKeyup = () => setKeydown(false)

    useEffect(() => {
        if(photos.length <= 0)return

        slideInit()

        if(mode == 'manual')manualSlideStart()
        if(mode == 'auto')autoSlideStart()
        if(mode == 'random')randomSlideStart()

        return () => slideInit()
    }, [photos.length,mode,theme]);
};
export default SlideManager