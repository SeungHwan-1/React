/*
    promise 는 콜백 지옥과 같은 코드가 형성되지 않게
    (비동기 통신간의 순서를 정하기 쉽게)하는 방안으로
    es6에서 도입되었다..

    promise객체 생성이유
    1. 비동기 처리함수를 실행 시 성공, 실패에 대한 처리가 요이하다
    2.promise 객체가 제공하는 메소드를 사용하기 위함
    (콜백 지옥 상황을 해소해 주기 때문 가독성이 좋고 메소드 체이닝 방식을 제공)
*/

const increase = (number)=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50)
            {
                const e = new Error("NumberToBig");
                return reject(e);
            }
            resolve(result);
        },1000)
    })
    return promise;
}

//console.log(increase(0));

//체이닝
//promise 객체는 then  메소드를 사용하여 비동기 작업의 결과를
//처리할수있다

increase(40).then(number=>{
    console.log(number);
    return increase(number);
}).then(number=>{
    console.log(number);
    return increase(number);
}).catch(e=>console.log(e,"가발생했네"));