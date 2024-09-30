import { useState } from "react"

const Main = () => {

    const [main,setMain] = useState(0);

    const onChange = () => setMain(main+1);

    return (
        <div>
            <h1>메인 : {main}</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}
export default Main;