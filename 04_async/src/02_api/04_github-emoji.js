import { useState } from "react";




const SearchBox = ({setImgUrl}) => {


    const [emojiName,setEmojiName] = useState('');

    const onChangeHandler = e =>{
        setEmojiName(e.target.value);
    }
    const onClickHandler = ()=>{
        
        fetch("https://api.github.com/emojis").then(r=>r.json()).then(result => setImgUrl(result[emojiName]));
    }                                                                        // .으론 문자열밖에 숫자공백포함되어도 돌려줄수있다

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
        </>
    )

}

const ImageBox = ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl} alt="이모지"/> :<h1>텅</h1>
}

const EmojiContainer = () => {
    const [imgUrl, setImgUrl] = useState("");


    return (
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>

        </>
    )
}

export default EmojiContainer;