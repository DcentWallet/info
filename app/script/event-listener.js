// 기존 사용자? 신규 사용자?
window._var_g_user = undefined;
// 지갑 Type
window._var_g_device = undefined;

window.addEventListener('load', ()=>{
    console.log('window loaded');
    // TODO : 최종 코드에서는 console.log() 를 제거해야 합니다.
    const onboarding_oldbie_device = document.getElementById('onboarding_oldbie_device');
    if (onboarding_oldbie_device) {
        console.log('onboarding_oldbie_device found');
        onboarding_oldbie_device.addEventListener('click', function() {
            console.log('onboarding_oldbie_device clicked');
            window._var_g_user = 'old';
            window._var_g_device = 'ble_dongle';
            sendEventMessage();
        });
    }
    const onboarding_oldbie_card = document.getElementById('onboarding_oldbie_card');
    if (onboarding_oldbie_card) {
        console.log('onboarding_oldbie_card found');
        onboarding_oldbie_card.addEventListener('click', function() {
            console.log('onboarding_oldbie_card clicked');
            window._var_g_user = 'old';
            window._var_g_device = 'card';
            sendEventMessage();
        });
    }
    const onboarding_oldbie_app = document.getElementById('onboarding_oldbie_app');
    if (onboarding_oldbie_app) {
        console.log('onboarding_oldbie_app found');
        onboarding_oldbie_app.addEventListener('click', function() {
            console.log('onboarding_oldbie_app clicked');
            window._var_g_user = 'old';
            window._var_g_device = 'soft';  
            sendEventMessage();          
        });
    }
    const onboarding_newbie_app = document.getElementById('onboarding_newbie_app');
    if (onboarding_newbie_app) {
        console.log('onboarding_newbie_app found');
        onboarding_newbie_app.addEventListener('click', function() {
            console.log('onboarding_newbie_app clicked');
            window._var_g_user = 'new';
            window._var_g_device = 'soft';
            sendEventMessage();
        });
    }

    const onboarding_newbie_device_complete = document.getElementById('onboarding_newbie_device_complete');
    if (onboarding_newbie_device_complete) {
        console.log('onboarding_newbie_device_complete found');
        onboarding_newbie_device_complete.addEventListener('click', function() {
            console.log('onboarding_newbie_device_complete clicked');
            window._var_g_user = 'new';
            window._var_g_device = 'ble_dongle';
            sendEventMessage();
        });
    }

    const onboarding_newbie_card_complete = document.getElementById('onboarding_newbie_card_complete');
    if (onboarding_newbie_card_complete) {
        console.log('onboarding_newbie_card_complete found');
        onboarding_newbie_card_complete.addEventListener('click', function() {
            console.log('onboarding_newbie_card_complete clicked');
            window._var_g_user = 'new';
            window._var_g_device = 'card';
            sendEventMessage();
        });
    }

    function sendEventMessage() {
        if (window._var_g_user === undefined || window._var_g_device === undefined) {
            console.log('user or device not selected');
            return;
        }
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
    }
})

window.onReceiveInstanceId = function(instanceId) {
    try {
        console.log('onReceiveInstanceId', instanceId);
        // TODO : 최종 코드에서는 console.log() 를 제거해야 합니다.
        window.dataLayer = window.dataLayer || []
        window.dataLayer?.push({
            app_instance_id: instanceId
        })
    } catch (e) {
        console.error(e)
    }
}