// /client/src/components/InventoryPage/InventoryList.js

import React, { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';

function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then(response => response.json())
      .then(data => setInventory(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {inventory.map(item => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default InventoryList;

