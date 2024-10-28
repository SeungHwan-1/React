import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coffeeMenuData from '../data/coffeeMenu.json';

function Menu() {
  const [coffeeMenu, setCoffeeMenu] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    setCoffeeMenu(coffeeMenuData);
  }, []);

  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {coffeeMenu.map(coffee => (
          <li key={coffee.id}>
            <li onClick={() => navigate(`/menu/${coffee.id}`)}>
              {coffee.name} - \{coffee.price}
            </li>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/order')}>주문하기</button> {/* 주문 페이지로 이동 */}
    </div>
  );
}

export default Menu;
