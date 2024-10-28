import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coffeeMenuData from '../data/coffeeMenu.json';

function CoffeeDetail({ addToOrder }) {
  // URL 파라미터에서 id 추출
  const { id } = useParams();

  const navigate = useNavigate();
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    const selectedCoffeeArray = coffeeMenuData.filter(c => c.id === parseInt(id));
    const selectedCoffee = selectedCoffeeArray[0]; 
    setCoffee(selectedCoffee); 
  }, [id]);


  const handleAddToOrder = () => {
    if (coffee) {
      addToOrder(coffee); 
      navigate('/menu'); // 장바구니에 추가 후 메뉴로 돌아감
    }
  };


  return (
    <div>
      <h2>{coffee.name}</h2>
      <p>가격: \{coffee.price}</p> 
      <p>설명: {coffee.description}</p> 
      <button onClick={handleAddToOrder}>장바구니 추가</button> 
      <button onClick={() => navigate('/menu')}>돌아가기</button> 
    </div>
  );
}

export default CoffeeDetail;
