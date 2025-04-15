<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
    // Add javascript code here
    // This is a simple example of a script that runs when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Page loaded');
    });
    // You can also add more complex logic here
    // For example, fetching data from an API
    async function fetchData() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();

    // Create a component that displays a message
    class MessageComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `<p>Hello from the custom element!</p>`;
        }
    }
    customElements.define('message-component', MessageComponent);
    // Use the custom element in the HTML
    const messageElement = document.createElement('message-component');
    document.body.appendChild(messageElement); 
</script>