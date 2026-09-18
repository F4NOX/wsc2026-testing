const Fullscreen = () => {

    const fullscreen = () => {
        document.querySelector('main').requestFullscreen();
    }

    return (
        <button onClick={fullscreen} className={'btn btn-primary'}>Fullscreen</button>
    )
};
export default  Fullscreen