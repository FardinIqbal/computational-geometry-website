import React from 'react';

function Toolbar() {
  return (
    <div className="bg-gray-100 w-48 p-4">
      <h2 className="font-bold mb-2">Tools</h2>
      <ul>
        <li>Draw Polygon</li>
        <li>Triangulate</li>
      </ul>
    </div>
  );
}

export default Toolbar;
