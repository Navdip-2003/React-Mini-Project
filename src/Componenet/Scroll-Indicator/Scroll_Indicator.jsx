import { lazy, useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0); // Track the current page

    // Function to generate a random color
    function randomColorUtility() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    async function fetchProducts(page) {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products?limit=50&skip=${page * 50}`);
            const data = await res.json();
            if (data && data.products && data.products.length) {
                setProducts(prevProducts => [...prevProducts, ...data.products]); // Append new products
            }
        } catch (e) {
            console.error("Error fetching products:", e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(page);
    }, [page]); 

    async function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight && !loading) {
            setPage(prevPage => prevPage + 1); // Increment page for next fetch
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
       
    }, []);

    if (loading && products.length === 0) return <div>Loading...</div>; // Show loading on initial fetch

    return (
        <div style={{ minHeight: '100vh' }}>
            {products.length > 0 ? 
                products.map(product => (
                    <div 
                        key={product.id} 
                        style={{ 
                          
                            fontSize: '20px', 
                            color: 'white', 
                            backgroundColor: randomColorUtility(), // Assign random color to each product
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 10px',
                            margin: '5px 0'
                        }}
                    >
                        <div>
                            <img style={{height : "50px" , width : '50px'}} src= {product.images[0]} loading="lazy" />
                            {product.title}
                        </div>
                        
                    </div>
                )) 
            : null}
            {loading && <div>Loading more...</div>} {/* Show loading indicator when fetching more */}
        </div>
    );
}
