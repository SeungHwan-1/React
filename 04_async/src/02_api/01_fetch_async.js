/*
    자바스크립트를 사용하면 필요할 때
    서버에 네트워크 요청을 보내고 새로운 정보를 받아올 수 있다.
    과거에는 ajax 를 이용해 페이지 새로고침 없이(비동기)
    서버에 데이터를 가져올 수 있었고,axios 외에 fetch를 이용해
    받아올 수 있다..
    fetch 는 ajax의 단점을 개선하고 좀 더 현대적인 방식으로
    네트워크 요청을 처리할 수 있게 해준다..
    따라서 최신 웹 어플리케이션은 fetch를 사용하는 것을 권장한다. 

    기본 사용 방법
  
    let promise = fetch(url,[option]);
    url 접근하고자하는 url
    option http method 나 headers,body 내용을 객체로 지정할 수 있다
    아무것도 넣지 않으면 기본 get 요청으로 전송한다

    --샘플 api
        https://jsonplaceholder.typicode.com
*/

async function callApi(){

    const promise = fetch("https://jsonplaceholder.typicode.com/users");

    const response = await promise;
    console.log(response);

    console.log(`응답 상태 : ${response.status}`);

    console.log("응답 헤더");
    for(let [key,value] of response.headers){
        console.log(`${key} : ${value} `);
    }    

    const json = await response.json();
    console.log(json);

    json.forEach(elment => {
        console.log(elment); //흠
    })

    /*
        JSon (javascript Object Notation)은 데이터를 구조화하여 교환하기 위한 경량 데이터 형식이다
        사람과 기계모두 읽고 쓰기 쉽게 설계되어 있으며
        주로 웹 어플리케이션에서 서버와 클라이언트 사이의 데이터 전송에 사용된다
        특징으로는
        1.택스트 기반의 형식
        2.키-값 쌍으로 데이터를 표현
        3.다양한 언어에서 지원
        4.다양한 데이터 타입을 지원
    */
}

callApi();