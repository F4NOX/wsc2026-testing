import {useStore} from "../store.jsx";

const ThemeSelect = () => {
    const { theme, setTheme } = useStore()

    return (
        <div>
            <label htmlFor="" className={'form-label'}>Theme</label>
            <select value={theme} onChange={e => setTheme(e.target.value)} className={'form-select'}>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
            </select>
        </div>
    )
};
export default ThemeSelect