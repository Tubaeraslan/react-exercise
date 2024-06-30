import React from 'react'

function Product(props) {
  const {productName,price}=props;
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat: {price} tl</div>
      </div>

    </div>
  )
}

export default Product