document.getElementById('openSmartThingsBtn').addEventListener('click', function() {
    // Define the deep link URL for the SmartThings app
    const smartThingsUrl = 'intent://#Intent;scheme=oneconnect;package=com.samsung.android.oneconnect;end';

    // Attempt to open the SmartThings app using window.location.href
    window.location.href = smartThingsUrl;
});
