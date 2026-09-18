import Fullscreen from "./components/Fullscreen.jsx";
import PhotoUpload from "./components/PhotoUpload.jsx";
import PhotoSort from "./components/PhotoSort.jsx";
import LoadSamples from "./components/LoadSamples.jsx";
import ModeSelect from "./components/ModeSelect.jsx";
import SlideManager from "./components/SlideManager.jsx";
import {useStore} from "./store.jsx";
import SlideA from "./components/slides/SlideA.jsx";
import ThemeSelect from "./components/ThemeSelect.jsx";
import SlideB from "./components/slides/SlideB.jsx";
import SlideC from "./components/slides/SlideC.jsx";
import SlideD from "./components/slides/SlideD.jsx";
import SlideE from "./components/slides/SlideE.jsx";
import SlideF from "./components/slides/SlideF.jsx";
import CommandBar from "./components/CommandBar.jsx";

function App() {

    const { theme, photos } = useStore()

  return (
    <div className="d-flex vw-100 vh-100">
        <div className="sidebar flex-shrink-0 overflow-y-auto overflow-x-hidden p-3 d-flex flex-column gap-3">
            <Fullscreen/>
            <PhotoUpload/>
            <LoadSamples/>
            <ModeSelect/>
            <ThemeSelect/>
            <PhotoSort/>
            <CommandBar/>
        </div>
        <main className="flex-1 bg-black w-100 h-100 d-flex align-items-center justify-content-center">
            <SlideManager/>
            {photos.length > 0 &&
                {
                    a:<SlideA/>,
                    b:<SlideB/>,
                    c:<SlideC/>,
                    d:<SlideD/>,
                    e:<SlideE/>,
                    f:<SlideF/>
                }[theme]
            }
        </main>
    </div>
  )
}

export default App
