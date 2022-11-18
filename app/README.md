# 앱 메인 광고 리스트 작성 방법 

en 에는 영문, ko에는 국문에 보여지는 광고를 정의 한다. 
실제 파일을 보면 object list 로 정의되지만 아마도 첫번째 광고만 쓰일 것으로 예상된다. 만약을 대비해 우선 array 로 정의 한다.

### AD object 

아래와 같은 항목을 정의 한다. 
- name: 광고의 이름, 실제 화면에 표시되거나 하지는 않음
- title: 광고의 title, 팝업 광고의 title text를 결정한다. 만약 값이 없으면 제목을 표시하지 않음.
- link: 광고 클릭시 이동하는 페이지
- image: 팝업 광고 이미지. 파일 이름만 지정한다. 파일의 실제 위치는 images 폴더 이다.
- bgColor: 광고 팝업의 배경색상. 정의하지 않으면 기본은 white 이다. 
- platform: 광고가 표시되는 플랫폼(앱). 만약 정의하지 않으면 모든 앱에서 표시 된다. 특정 플랫폼에서만 표시하고 싶은 경우에만 정의한다. 
- appVersion: 최소 지원 앱 버전. 정해진 앱 버전 이상에서만 광고를 띄운다. 
- fwVersion: 지문인증형 지갑인 경우에 정해진 버전 이상에서만 광고를 띄운다. 
- percentage: 광고를 노출시키는 확률. 앱 세션시작시 정해진 퍼센트의 확률로 광고를 띄운다. 1보다 작은 값으로 설정한다. 1보다 크거나 정의하지 않으면 무조건 광고를 띄운다. 
- walletType: 정의된 지갑 사용자에게만 팝업 광고를 보여준다. 정의하지 않으면 모든 사용자에게 띄운다. 특정 지갑 사용자에게 보여주고 싶은 경우 사용한다. 
- buttons: 광고 팝업의 하단 버튼 텍스트. 1개 또는 2개만 정의한다. 
- account: 특정 account를 가진 사용자에게만 광고를 띄운다. 이는 우리 코드의 coinType값을 이용한다. 만약 contract 계정인 경우에는 "{coinType}/{contract}" 로 정의한다. 
- balance: 잔액이 일정금액 기준 기준에 부합되는 경우에만 광고를 보여준다. <, >, = 이렇게 3가지의 조건만 사용가능하다. 
- startTimestamp: 광고가 시작되는 시간의 타임스탬프. 정하지 않으면 바로 띄운다. 
- endTimestamp: 광고가 끝나는 시간의 타임스탬프. 정하지 않으면 종료되지 않는다. 
- externalWindow: true 이면 explore를 호출하여 외부에서 링크 연결, false 이면 discovery tab에서 연결 
- networkId: `externalWindow` 가 false인 경우 discovery 연결시 networkId를 지정할 수 있다. 
- preRelease: release 에서 보이지 않고 preRelease에서만 광고가 보인다. 

[ Example ]
```
{
    "name": "black_friday_2022",
    "title": "Black Friday 2022",
    "link": "https://dcentwallet.com/events/20221117-blackfriday-promotion?lang=en",
    "image": "image_black_friday_app_en.png",
    "bgColor": "#000000",
    "platform": [ "ios", "android"],
    "percentage": 0.1,
    "walletType": [ "soft", "card", "ble_dongle"],
    "buttons": [ "ok", "go to store" ],
    "account": [ "RIPPLE" ],
    "balance": "> 0",
    "startTimestamp": "1668906400", 
    "endTimestamp": "1668956400",
    "externalWindow": true,
    "preRelease": true
}
```
