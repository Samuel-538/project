document.getElementById('orderButton').addEventListener('click', function() {
    const cakeType = document.getElementById('cakeType').value;
    const cakeSize = document.getElementById('cakeSize').value;
    const message = document.getElementById('message').value;
    const contactInfo = document.getElementById('contactInfo').value;

    document.getElementById('cakeSummary').innerHTML = `You have ordered a ${cakeSize} ${cakeType} cake with the message: "${message}". We will contact you at ${contactInfo} for more information.`;
});