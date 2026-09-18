import { useEffect, useState } from "react";
import { useStore } from "../store";

const CommandBar = () => {

    const { setTheme, setMode } = useStore()

    const options = [
        {
            label:"Change to manual control mode",
            action:() => setMode('manual')
        },
        {
            label:"Change to auto-playing mode",
            action:() => setMode('auto')
        },
        {
            label:"Change to random playing mode",
            action:() => setMode('random')
        },
        {
            label:"Switch to theme A",
            action:() => setTheme('a')
        },
        {
            label:"Switch to theme B",
            action:() => setTheme('b')
        },
        {
            label:"Switch to theme C",
            action:() => setTheme('c')
        },
        {
            label:"Switch to theme D",
            action:() => setTheme('d')
        },
        {
            label:"Switch to theme E",
            action:() => setTheme('e')
        },
        {
            label:"Switch to theme F",
            action:() => setTheme('f')
        },
    ]


    const [input, setInput] = useState("")
    const [selected, setSelected] = useState(0)
    const [filtered, setFiltered] = useState(options)
    const [open,setOpen] = useState(false)

    useEffect(() => {
        let temp = [...options]
        temp = temp.filter(opt => opt.label.toLowerCase().includes(input.toLowerCase()))
        setFiltered(temp)
    },[input])

    const closeModal = () => {
        setSelected(0)
        setInput("")
        setOpen(false)
    }


    const cmdKeydown = e => {

        if(e.key == "/" || (e.key == " " && e.ctrlKey)){
            setOpen(true)
            if(document.activeElement)document.activeElement.blur()
            setTimeout(() => document.querySelector('.cmd-input').focus(),100)
        }

        if(!open)return;

        if(e.key == "ArrowDown"){
            setSelected(prev => (prev + 1) % filtered.length)
        }
        if(e.key == "ArrowUp"){
            setSelected(prev => (prev - 1 + filtered.length) % filtered.length)
        }
        if(e.key == "Enter"){
            filtered[selected].action()
            closeModal()
        }
        if(e.key == "Escape"){
            closeModal()
        }
    }

    useEffect(() => {
        const el = document.querySelector('.selected')
        if(el)el.scrollIntoView()
    },[selected])

    useEffect(() => {
        window.addEventListener('keydown',cmdKeydown)
        return () => window.removeEventListener('keydown',cmdKeydown)
    },[input,selected,filtered,open])

    return (open &&
        <div className="cmd-modal">
            <div className="cmd-container">
                <input value={input} onChange={e => setInput(e.target.value)} className="cmd-input"/>
                <div className="options">
                    {filtered.map((opt,i) => {
                        return (
                            <div key={i} className={`option ${selected == i ? 'selected' : ''}`}>
                                {opt.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default CommandBar