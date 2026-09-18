import {useStore} from "../../store.jsx";
import '../../assets/css/a.css'

const SlideA = () => {

    const { photos, currentIdx } = useStore()

    return (
        <div
            style={{width:"95%",height:"90%"}}
            className={'slide-a bg-dark position-relative'}
        >
            <div>
                <img src={photos[currentIdx].src} alt=""/>
                <div className={'caption'}>{photos[currentIdx].caption}</div>
            </div>
        </div>
    )
};
export default SlideA