  let quantity = 0;
  
  const increment = () => {
    quantity = quantity + 1;
    console.log('quantity:', quantity);
  };
  const decrement = () => {
    quantity = Math.max(0, quantity - 1);
    console.log('quantity:', quantity);
  };
