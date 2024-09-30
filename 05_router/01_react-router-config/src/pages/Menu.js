import { useState } from "react"

const Menu = () => {

    const [main,setMain] = useState(0);

    const onChange = () => setMain(main+1);

    return (
        <div>
            <h1>메뉴 목록 : {main}</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}
export default Menu;