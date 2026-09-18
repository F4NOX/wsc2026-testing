import {useStore} from "../store.jsx";

const PhotoUpload = () => {

    const { setPhotos } = useStore()

    const upload = e => {
        const files = e.type == 'drop' ? e.dataTransfer.files : e.target.files
        Array.from(files).forEach(file => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                const obj = {
                    src: reader.result,
                    caption: file.name.split(".")[0].split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1,)).join(" ")
                }
                setPhotos(prev => [...prev, obj])
            }
        })
    }

    return (
        <>
            <input onChange={e => upload(e)} type="file" id={'fileInput'} accept={'image/*'} multiple hidden/>
            <label htmlFor="fileInput">
                <div
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => {
                        e.preventDefault()
                        upload(e)
                    }}
                    className={'border border-dark p-3 text-center'}
                >
                    Click or drop here to upload photos
                </div>
            </label>
        </>
    )
};
export default PhotoUpload;