import {useStore} from "../store.jsx";

const ModeSelect = () => {
    const { mode, setMode } = useStore()

    return (
        <div>
            <label htmlFor="" className={'form-label'}>Mode</label>
            <select value={mode} onChange={e => setMode(e.target.value)} className={'form-select'}>
                <option value="manual">Manual</option>
                <option value="auto">Auto-Playing</option>
                <option value="random">Random</option>
            </select>
        </div>
    )
};
export default ModeSelect