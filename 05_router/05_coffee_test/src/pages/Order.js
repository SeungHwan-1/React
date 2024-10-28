import React from 'react';

function Order({ order }) {
  return (
    <div>
      <h2>주문 확인</h2>
      {order.length === 0 ? (
        <p>선택한 커피가 없습니다.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - ₩{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Order;
