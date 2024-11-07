
    document.querySelector('.order-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const orderItem = document.querySelector('#order-item');
        const selectedOption = orderItem.options[orderItem.selectedIndex];
        const price = selectedOption.getAttribute('data-price'); 

        const name = document.querySelector('#name').value.trim();
        const phone = document.querySelector('#phone').value.trim();

        // Validation
        if (!name || !phone || !selectedOption) {
            alert('Please fill in all fields and select an item.');
            return;
        }

        alert(`Thank you, ${name}! You ordered ${selectedOption.text}. Total amount: ₹${price}.🎉`);

        this.reset();
    });

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('More information about this item.');
        });
    });


