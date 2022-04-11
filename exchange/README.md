# exchange 에서 쓰일 인터페이스 추가
---

## TL;DR
- 각 객체는 서비스에서 보내는 데이터중에서, 현재 디센트에서 지원가능 한 리스트를 추려내는 데에 사용한다.
- 서비스에서 보내는 데이터란 각 서비스에서 교환기능을 지원하는 토큰/코인을 말한다.
- 디센트의 네트워크가 추가되면 exchagneMapper.json 에 주어진 양식으로 객체가 추가되어야한다.
- 디버깅시에, '... 이 배열은 비어있어야합니다..'와 같은 말에 보이는 객체들은,
  - 서비스에서 지원하지만 Mapper 에 객체가 추가가 되지 않았거나,
  - 객체가 존재하지만 서비스에서 새로이 지원하는 네트워크이고 동기화가 되지않았거나 이다.
- 이미 존재하는 객체가 있다는것은 디센트가 네트워크를 먼저 지원했고, 프로퍼티값이 비어있기 때문에 해당 서비스에서 보내주는 값들중 적절한 값들과 동기화 시켜줄 필요가 있다.
  - network : changeNow 에서 보내는 데이터들의 구조체중 network 프로퍼티와 같다.
  - protocol: changelly 에서 보내는 데이터의 구조체중 protocol 프로퍼티와 같다.
---
## 데이터 구조

**network**: changeNow 에서 사용하는 구조체의 네트워크 이름. 체인지 나우는 네트워크이름을 특이하게 보내주는 경향이 있다. 디버깅시 notMatchedList를 까보고 디센트가 지원하는 메인넷인데도 불구하고 필터에 걸리는 것들은 대개 예상치 못한 이름을 갖고있는 경우가 많으니 주의.<br>
**protocol**: changelly 에서 사용하는 구조체의 protocol 이름. <br>
**groupName**: 디센트에서 사용하는 네트워크를 그룹짓는 그룹이름. 디센트에서 지원하는 네트워크의 단위로 쓰인다.<br>
**supportCustom**: 해당 네트워크에서 디센트가 커스텀코인을 지원하는지 여부이다. 계정을 추가할 때 커스텀 코인을 추가할 수 있는지 알 수 있다 <br>
**tokenGroup**: typeAccount가 가진 groupName을 포함해야한다. 그래야 어떤 네트워크인지 알 수 있다.
**extraName**: 해당 이름으로 changeNow의 ticker를 찾을 수 있다. 예를들어 우리가 가진 bsc 메인넷의 심볼은 bnb이다. changeNow에서는 bnbbsc 이므로 심볼로 비교할 수 없다. 여기서 값을 넣어주면 메인넷 코인으로 취급한다.
**least**: estimated value 와 balance 를 합쳤을 때 넘어야하는 최소 수량이다. xrp의 경우 20이다.

---
### changeNow
changeNow의 구조체는 다음과 같이 생겼다.
```
{
    "ticker": "btc",
    "name": "Bitcoin",
    "image": "https://changenow.io/images/sprite/currencies/btc.svg",
    "hasExternalId": false,
    "isFiat": false,
    "featured": true,
    "isStable": false,
    "supportsFixedRate": true,
    "network": "btc",
    "tokenContract": null,
    "buy": true,
    "sell": true,
    "legacyTicker": "btc"
}
```
---
### changelly
changelly 의 구조체는 다음과 같다.
```
{
    "name": "btc",
    "ticker": "btc",
    "fullName": "Bitcoin",
    "enabled": true,
    "enabledFrom": true,
    "enabledTo": true,
    "fixRateEnabled": true,
    "payinConfirmations": 2,
    "extraIdName": null,
    "addressUrl": "https://www.blockchain.com/btc/address/%1$s",
    "transactionUrl": "https://www.blockchain.com/btc/tx/%1$s",
    "image": "https://web-api.changelly.com/api/coins/btc.png",
    "fixedTime": 1200000,
    "protocol": "BTC",
    "blockchain": "bitcoin",
    "notifications": {}
    "contractAddress"? : '..' // 컨트렉트주소가 있을경우 제공된다.
}
```
## Errorhandle

- Maper에 계정의 네트워크 {?}가 등록되어있지않습니다.
  - 해당 네트워크를 mapper의 토큰그룹들에서 찾을 수 없다는 말이다. typeAccount가 사용될 수 있는지, 지원하는지 검사하여 지원하는 종류면 typeAccount에 prospect 프로퍼티를 추가해 주는 작업을 할 때, Mapper에서 tokenGroup과 해당 typeAccount의 groupName을 보고 어떤 네트워크인지 판단을 한다. 
  > **해결법**: {?}를 exchangeMapper.json 의 tokenGroup 어딘가 적절한 곳에 추가한다. 
- mock이 아닌 상태에서 이 배열에는 객체가 없어야합니다.
  - protocol 이 mapper에 없고, 컨트렉트 주소도 없고, 심볼이 매칭되지도 않는다. 또는 컨트렉트 주소가 있지만 두 개 이상의 지원하는 리스트와 매칭된다. 사실 후자는 그럴리가 없기 때문에 전자의 경우로, 특정할 수 없는 토큰일 경우가 있다. 해당 서비스에 제대로 컨트렉트 주소 적어서 보내라고 항의해야한다..
- 이름과 네트워크 주소가 같지만..
  - 두 개 이상의 서비스에서 다른 컨트렉트 주소를 보내주는 경우이다.
- 계정을 추가하였으나 리스트에 나타나지 않을 떄
  - prospectRepo 엔 있으나, 계정에 필터되지 않는 것으로, ticker가 매칭되지 않아서 그렇다. extraName 배열에 repo에 있는 ticker를 추가해준다.
- changeNow의 경우에는 ticker or legacyticker를 보내주어야한다. 명확한 기준이 없으니