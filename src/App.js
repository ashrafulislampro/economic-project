
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Friend from './components/Friendlist/Friend';
import companies from './data/data2.json';
function App() {
  
  const [friends, setFriend] = useState([]);
  
  useEffect(() =>{
    setFriend(companies);
  },[])
  const [cart, setCart] = useState([]);
  const handleAddFriend = (friend) => {
    const newCart = [...cart,friend];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Friends Collection : {friends.length}</h1> 
      <div className="container">
        <div>
          {
            friends.map(fri => <Friend friend={fri} key={fri.id} handleAddFriend={handleAddFriend}></Friend>)
          } 
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>  
    </div>
  );
}

export default App;
