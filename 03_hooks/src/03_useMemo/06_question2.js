import { useState , useMemo } from "react";

const products = [
    { name: "아이폰 16", category: "전자제품" },
    { name: "맥북 프로", category: "전자제품" },
    { name: "에어팟", category: "전자제품" },
    { name: "삼성 갤럭시", category: "전자제품" },
    { name: "나이키 운동화", category: "의류" },
    { name: "아디다스 티셔츠", category: "의류" },
    { name: "믹서기", category: "가전제품" },
    { name: "전자레인지", category: "가전제품" },
  ];

 



  export const ProductFilter = ()=>{

    const [categoryList,setCategoryList] = useState("");

    const filterProduct = useMemo(()=>{
        if(categoryList === "")
        {
            return products;
        }
        return products.filter(product => product.category === categoryList)
    },[categoryList]);


    return(
        <>
            <h1>상품카테고리쓰</h1>
            <button onClick={()=>setCategoryList("")}>모든 카테고리</button>
            <button onClick={()=>setCategoryList("")}>전자제품</button>
            <button onClick={()=>setCategoryList("")}>의류</button>
            <button onClick={()=>setCategoryList("")}>가전제품</button>
            
            <h2>총 {ProductFilter.length}개의 상품</h2>
            <ul>
              
            </ul>
        </>
    )
  }