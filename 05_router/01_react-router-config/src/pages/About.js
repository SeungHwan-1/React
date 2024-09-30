import { useState } from "react"

const About = () => {

    const [main,setMain] = useState(0);

    const onChange = () => setMain(main+1);

    return (
        <div>
            <h1>소개 : {main}</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}
export default About;