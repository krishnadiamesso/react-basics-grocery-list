import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='total-items'>Items: {props.itemTotal}</span>
    </header>
  );
};

const Item = ({ id, name, handleRemoveItem }) => {
  return (
    <div className='item'>
      <button className='remove-item' onClick={() => handleRemoveItem(id)} />
      <span className='item-name'>{name}</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment' onClick={incrementQuantity}>
        +
      </button>
      <button className='decrement' onClick={decrementQuantity}>
        -
      </button>
      <span className='quantity-amount'>{quantity}</span>
    </div>
  );
};

const App = () => {
  const items = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Box of Pasta' },
    { id: 4, name: 'Cookies' },
  ];

  const headerTitle = 'Grocery List';
  const [groceryList, setGroceryList] = useState(items);

  const handleRemoveItem = (id) => {
    setGroceryList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='grocery-list'>
      <Header title={headerTitle} itemTotal={groceryList.length} />
      {/* Grocery List */}
      {groceryList.map((item, index) => (
        <Item
          key={item.id}
          name={item.name}
          id={item.id}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
