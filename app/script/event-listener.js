// 기존 사용자? 신규 사용자?
window._var_g_user = undefined;
// 지갑 Type
window._var_g_device = undefined;

window.addEventListener('load', ()=>{
    console.log('window loaded');
    // TODO : 최종 코드에서는 console.log() 를 제거해야 합니다.
    const onboarding_start_newbie = document.getElementById('onboarding_start_newbie');
    if (onboarding_start_newbie) {
        console.log('onboarding_start_newbie found');
        onboarding_start_newbie.addEventListener('click', function() {
            console.log('onboarding_start_newbie clicked');
            window._var_g_user = 'new';

            console.log('onboarding_complete - user: ' + window._var_g_user );
            // Sent to Native Event 
            const eventMessage = {
                name: 'onboarding_complete',
                user: window._var_g_user,
                device: window._var_g_device
            }
            if (window.webkit) { // iOS
                window.webkit.messageHandlers.post.postMessage(JSON.stringify(eventMessage))
            } else { // android 
                if (root) {
                    root.post(JSON.stringify(eventMessage)); 
                }
            }

        });
    }
    const onboarding_start_oldbie = document.getElementById('onboarding_start_oldbie');
    if (onboarding_start_oldbie) {
        console.log('onboarding_start_oldbie found');
        onboarding_start_oldbie.addEventListener('click', function() {
            console.log('onboarding_start_oldbie clicked');
            window._var_g_user = 'old';
        });
    }
    const onboarding_wallet_device = document.getElementById('onboarding_wallet_device');
    if (onboarding_wallet_device) {
        console.log('onboarding_wallet_device found');
        onboarding_wallet_device.addEventListener('click', function() {
            console.log('onboarding_wallet_device clicked');
            window._var_g_device = 'device';
        });
    }
    const onboarding_wallet_card = document.getElementById('onboarding_wallet_card');
    if (onboarding_wallet_card) {
        console.log('onboarding_wallet_card found');
        onboarding_wallet_card.addEventListener('click', function() {
            console.log('onboarding_wallet_card clicked');
            window._var_g_device = 'card';
        });
    }
    const onboarding_wallet_soft = document.getElementById('onboarding_wallet_soft');
    if (onboarding_wallet_soft) {
        console.log('onboarding_wallet_soft found');
        onboarding_wallet_soft.addEventListener('click', function() {
            console.log('onboarding_wallet_soft clicked');
            window._var_g_device = 'soft';
        });
    }

    const onboarding_complete = document.getElementById('onboarding_complete');
    if (onboarding_complete) {
        console.log('onboarding_complete found');
        onboarding_complete.addEventListener('click', function() {
            console.log('onboarding_complete - user: ' + window._var_g_user + ', device: ' + window._var_g_device);
            // Sent to Native Event 
            const eventMessage = {
                name: 'onboarding_complete',
                user: window._var_g_user,
                device: window._var_g_device
            }
            if (window.webkit) { // iOS
                window.webkit.messageHandlers.post.postMessage(JSON.stringify(eventMessage))
            } else { // android 
                if (root) {
                    root.post(JSON.stringify(eventMessage)); 
                }
            }
        });
    }
})
