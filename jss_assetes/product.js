/* Product page JavaScript: renders products and implements search/filter/sort */
document.addEventListener('DOMContentLoaded', () => {
    // Sample product data (could be replaced by a fetch to an API)
    const products = [
        { id: 'p1', name: 'Acrylic Paint Set', price: 199, category: 'Art Supplies', description: '12-colour acrylic paint set, non-toxic, vibrant pigments.' },
        { id: 'p2', name: 'Watercolour Brush Pack', price: 89, category: 'Art Supplies', description: 'Set of 6 brushes for watercolour techniques.' },
        { id: 'p3', name: 'Poetry Book', price: 250, category: 'Books', description: 'A collection of contemporary poems by local authors.' },
        { id: 'p4', name: 'Fantasy Novel', price: 320, category: 'Books', description: 'Epic fantasy novel with imaginative world-building.' },
        { id: 'p5', name: 'Original Oil Painting (Small)', price: 1500, category: 'Paintings & Drawings', description: 'Original small oil painting by a local artist.' },
        { id: 'p6', name: 'Portrait Commission (A4)', price: 1200, category: 'Paintings & Drawings', description: 'Custom portrait commission, A4 size.' },
        { id: 'p7', name: 'Beginner Dance Course', price: 1500, category: 'Performance Art Classes', description: '8-week beginner dance course, weekly sessions.' },
        { id: 'p8', name: 'Songwriting Workshop', price: 1800, category: 'Performance Art Classes', description: 'Two-day intensive songwriting workshop.' }
    ];

    // DOM elements
    const listEl = document.getElementById('product-list');
    const searchEl = document.getElementById('product-search');
    const categoryEl = document.getElementById('product-category');
    const sortEl = document.getElementById('product-sort');

    // Populate category options
    function populateCategories() {
        const cats = Array.from(new Set(products.map(p => p.category)));
        cats.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categoryEl.appendChild(opt);
        });
    }

    // Render product cards
    function renderProducts(items) {
        listEl.innerHTML = '';
        if (!items.length) {
            listEl.innerHTML = '<p>No products match your search.</p>';
            return;
        }
        items.forEach(p => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.setAttribute('data-id', p.id);
            card.style.border = '1px solid #ddd';
            card.style.padding = '0.75rem';
            card.style.borderRadius = '6px';
            card.style.background = '#fff';

            const title = document.createElement('h3');
            title.textContent = p.name;
            title.style.marginTop = '0';

            const price = document.createElement('p');
            price.textContent = `R${p.price.toLocaleString()}`;
            price.style.fontWeight = '700';

            const desc = document.createElement('p');
            desc.textContent = p.description;
            desc.style.fontSize = '0.95rem';

            const btn = document.createElement('button');
            btn.className = 'product-detail-button';
            btn.textContent = 'View details';
            btn.setAttribute('data-product-id', p.id);
            btn.style.marginTop = '0.5rem';

            btn.addEventListener('click', () => showProductDetails(p.id));

            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(desc);
            card.appendChild(btn);

            listEl.appendChild(card);
        });
    }

    // Apply search, category filter, and sort
    function getFilteredAndSorted() {
        const q = (searchEl?.value || '').trim().toLowerCase();
        const cat = categoryEl?.value || 'all';
        const sort = sortEl?.value || 'name-asc';

        let out = products.filter(p => {
            const matchesQuery = q === '' || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
            const matchesCat = cat === 'all' || p.category === cat;
            return matchesQuery && matchesCat;
        });

        if (sort === 'name-asc') out.sort((a,b) => a.name.localeCompare(b.name));
        if (sort === 'name-desc') out.sort((a,b) => b.name.localeCompare(a.name));
        if (sort === 'price-asc') out.sort((a,b) => a.price - b.price);
        if (sort === 'price-desc') out.sort((a,b) => b.price - a.price);

        return out;
    }

    // Update UI
    function update() {
        const items = getFilteredAndSorted();
        renderProducts(items);
    }

    // Show simple details (could be replaced by a modal)
    function showProductDetails(productId) {
        const p = products.find(x => x.id === productId);
        if (!p) return alert('Product not found');
        const msg = `${p.name}\nPrice: R${p.price.toLocaleString()}\nCategory: ${p.category}\n\n${p.description}`;
        alert(msg);
    }

    // Wire events
    populateCategories();
    searchEl?.addEventListener('input', () => update());
    categoryEl?.addEventListener('change', () => update());
    sortEl?.addEventListener('change', () => update());

    // Initial render
    update();
});

/* End of product.js */

//References:
// (w3shools, n.d) Validating Email Addresses in JavaScript
// Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 31 October 2025).