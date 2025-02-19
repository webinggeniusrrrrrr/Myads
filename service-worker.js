// service-worker.js

// Run code when the service worker is installed
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting(); // Activate immediately
});

// Run code when the service worker is activated
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});

// Periodic sync event (useful for regular background tasks)
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundTask());
    }
});

// Define the background task
async function doBackgroundTask() {
    console.log('Executing background task...');
    // Example task: Fetch data or perform any background operation
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log('Fetched data in the background:', data))
        .catch(error => console.error('Background fetch failed:', error));
}
