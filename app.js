document.querySelectorAll('.nav-links a, .btn-outline').forEach (link =>{
    link.addEventListener('click', (e) =>{
        const targetId = link.getAttribute ('href');
        // FIX 1: Safely handle instances where href is missing or empty
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(targetId);
            if (element) element.scrollIntoView({behavior: 'smooth'});
        }
    });
});

const WHATSAPP_NUMBER = "2348149043883";
const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // FIX 2: Changed standard quotes to backticks (`) and fixed $(var) to ${var}
    const fullMessage = `Hello, my name is ${name}\n` +
                        `Email: ${email}\n\n` +
                        `Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    
    // FIX 3: Removed the extra space between "?" and "text"
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // FIX 4: Removed the intrusive fullscreen call
    whatsappForm.reset(); // Replaced with a clean form clear instead
});
