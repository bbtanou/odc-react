import { useState } from "react";

function App(){
  const [product, setFormData] = useState({name: '', price: '', quantity: ''})
  const [listProducts, addProducts] = useState([]);
  
  const detectChange = (e) => {
    setFormData({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  const detectAddProduct = (e) => {
    e.preventDefault();
    
    if(!product.name || !product.price || !product.quantity){
      console.log("Le formulaire n'est pas valide");
      return;
    }

    addProducts([...listProducts, product])

    setFormData({name: '', price: '', quantity: ''});
  }

  return (
    <div>
      <h2>Gestion de produit</h2>
    <form onSubmit={detectAddProduct}>
      <input type="text" placeholder="Product name" name="name" value={formData.name} onChange={detectChange}/>
      <input type="text" placeholder="Price" name="price" value={formData.price} onChange={detectChange}/>
      <input type="text" placeholder="Quantity" name="quantity" value={formData.quantity} onChange={detectChange} />

      <button type="submit">Ajouter</button>
    </form>

    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Quantite</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity }</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default App;