function submitForm() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !phone || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // You can add more advanced validation or send the data to a server here
            console.log('Name:', name);
            console.log('Phone:', phone);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Form submitted!'); // Replace with actual submission logic
        }

        const scrollButton = document.getElementById('scrollButton');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                scrollButton.classList.add('show');
            } else {
                scrollButton.classList.remove('show');
            }
        });

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const contactButton = document.getElementById('contactButton');
        contactButton.addEventListener('click', () => {
            alert('Contact button clicked!');
            // Replace with your contact logic (e.g., open a contact form)
        });  

        