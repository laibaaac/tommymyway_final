document.getElementById('openSmartThingsBtn').addEventListener('click', function() {
    
    const smartThingsUrl = 'intent://#Intent;scheme=oneconnect;package=com.samsung.android.oneconnect;end';

    // Create an invisible iframe to attempt to open the SmartThings app
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.display = 'none';
    iframe.src = smartThingsUrl;

    document.body.appendChild(iframe);
});
