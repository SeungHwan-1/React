import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navi = useNavigate();
  const clickHandler = () => {

    navi("/");
  }

  return (<>
      <div>
        <h1>존재하지 않는 페이지 입니다.</h1>
        <button onClick={clickHandler}>HOME 으로 돌아가기</button>
      </div>
  </>)
}

export default Error;