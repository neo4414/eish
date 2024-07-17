import React from "react";
import Product from "./product";

const Home = () => {
    const products = [
        
        {name:'Computer',
        image:'d:\istockphoto-1255016505-1024x1024.jpg',
        description:'this is a sample product for computer',
        price:29.99,
        quantity:10,
    },
    {name:'LGTV',
        image:'d:\istockphoto-1217417403-1024x1024.jpg',
        description:'this is a sample product for computer',
        price:49.99,
        quantity:5,
    },
    {name:'Printer',
        image:'d:\bathroom-713248_640.png',
        description:'this is a sample product for computer',
        price:19.99,
        quantity:20,
    },
    ];
    return(
        <div>
            <h1>Home Component</h1>
            {products.map((product, index) => (
                <Product
                key={index}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                />
            ))}
        </div>
    );
};
export default Home;