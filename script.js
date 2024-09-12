function sendMessage(productName) {
    const phoneNumber = '+6281288571309'; // Your WhatsApp number
    const message = `HALO BANG AKU MAU ORDER ${productName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}