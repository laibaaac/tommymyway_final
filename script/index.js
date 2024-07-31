document.getElementById('openSmartThingsBtn').addEventListener('click', function() {
    const smartThingsPackage = 'com.samsung.android.oneconnect';
    const smartThingsUrl = `intent://#Intent;package=${smartThingsPackage};end`;

    // Create an invisible iframe to attempt to open the SmartThings app
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.display = 'none';
    iframe.src = smartThingsUrl;

    document.body.appendChild(iframe);

    // Delay to give the iframe a moment to attempt to open the app
    setTimeout(() => {
        // If the app doesn't open, the user might be redirected to the Play Store
        // This is out of your control, as the system will decide based on the app's availability
    }, 2000); // Adjust delay if necessary
});