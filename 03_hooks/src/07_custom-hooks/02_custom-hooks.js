import { useState } from "react"


const useInput = () => {
    const [value,setValue] = useState("");

    const onChange = e => setValue(e.target.value);

    return {value,onChange};
}

export const Customhooks = () => {
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return (
        <>
            <label>이름 :</label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <label>비밀번호 :</label>
            <input type="password" {...pass}/> {/*속성이나 키가같을때 같음*/}
            <br/>
            <label>이메일 :</label>
            <input type="email" {...email}/> {/*속성이나 키가같을때 같음*/}
            <br/>

            <h4>name : {name.value}</h4>
            <h4>pass : {pass.value}</h4>
            <h4>email : {email.value}</h4>
        </>
    )

}