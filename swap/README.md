## config 구조
pre release 에서는 뒤에 -stage 가 붙은 파일을 네트워크 설정 파일로 사용합니다.
상용 릴리즈 빌드에서는 networkConfig.json 을 사용합니다.

### networks
```js
{
  name: swap 어플리케이션 내부에서 쓰일 이름 값, 네트워크 선택 시에 보이는 이름,
  networkId: *이 값은 'info/dapp/network_info' 의 networkId와 같아야한다*,
  type: *이 값은 해당 networkId가 속해있는 type과 일치해야한다.*,
  available: 현재 네트워크 사용 가능 여부, 서비스별로 boolean 값이 필요하다.
  tokenGroup: common/coin-group 을 참고하여 하드코딩, add account 할 때 필요
  explorer: 트랜잭션을 확인할 수 있는 스캐너 url. tx/ 까지 입력하여 뒤에 해쉬값이 올 수 있도록 한다.
}
```