
const ApiComponent = () => {

    const callApi = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            console.log(response);
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error => {
            console.log("API 호출 중 오류 발생",error);
        })      
    }
    return (
        <>
            <button onClick={callApi}>호출</button>
        </>
    )
}
export default ApiComponent;