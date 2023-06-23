## config 구조

### networks

```js
{
  name: swap 어플리케이션 내부에서 쓰일 이름 값, 네트워크 선택 시에 보이는 이름
  networkId: 'info/dapp/network_info.json' 의 networkId와 같아야 한다.
  type: 해당 networkId가 속해있는 type과 일치해야 한다.
  available: 현재 네트워크 사용 가능 여부, 서비스별로 boolean 값이 필요하다.
  explorer: 트랜잭션을 확인할 수 있는 스캐너 url. tx/ 까지 입력하여 뒤에 해쉬값이 올 수 있도록 한다.
  group: 'info/dapp/network_info.json' 의 coinType과 같아야 한다.
  symbol: 'info/supported_coin.json' 의 symbol과 같아야 한다.
  pre: *프리릴리즈* true 이면 stage(프리릴리즈) 에서만 이용할 수 있다.
}
```
