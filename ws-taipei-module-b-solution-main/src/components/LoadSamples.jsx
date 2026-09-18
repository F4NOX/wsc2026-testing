import Image1 from '../assets/samples/basilique-notre-dame-de-fourviere-lyon.jpg'
import Image2 from '../assets/samples/place-bellecour-lyon.jpg'
import Image3 from '../assets/samples/beautiful-view-in-lyon.jpg'
import Image4 from '../assets/samples/tour-metalique-lyon.jpg'
import {useStore} from "../store.jsx";
const LoadSamples = () => {

    const { setPhotos } = useStore()

    const samples = [
        {
            src: Image1,
            caption: "basilique-notre-dame-de-fourviere-lyon",
        },
        {
            src: Image2,
            caption: "place-bellecour-lyon",
        },
        {
            src: Image3,
            caption: "beautiful-view-in-lyon",
        },
        {
            src: Image4,
            caption: "tour-metalique-lyon",
        }
    ]

    const loadSamples = () => {
        samples.forEach(s => {
            const obj = {
                src: s.src,
                caption: s.caption.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1,)).join(" ")
            }
            setPhotos(prev => [...prev, obj])
        })
    }

    return (
        <button onClick={loadSamples} className={'btn btn-warning'}>Load Samples</button>
    )
};
export default LoadSamples