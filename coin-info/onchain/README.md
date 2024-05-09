# 디센트 월렛 Onchain 노드 정보

디센트 월렛에서 네트워크 조회시 사용되는 노드 정보와 수수료 관련 정보 정의.
`dcent-onchain-fallback`  Package에서 사용된다.

## 파일명

- `dcent-onchain-fallback` 에서 정의된 이름을 사용


## JSON 설명

`dcent-onchain-fallback` 에서 노드 정보를 받아 해당 노드 배열을 Fallback 형태로 수행한다.

```js
{
	...,
	"네트워크이름" : // 디센트 월렛 CoinGroup.name의  Lowercase
    {
      "default": // 특정 Onchain 함수를 사용하지 않는 디폴트 노드 정보
        [ ] //노드의 정보
      "함수 이름": // Onchain 의 함수 명
        [
          {
            "url": "/abc/def" // 노드의 URL
            "impl": "BlockCypherApi" // dcent-onchain-fallback 에서 정의된 노드 API  구현 파일명
            "info": // 노드 API를 수행할때 필요한 정보 
            {...}
          },
        ]
    },
  ...
}
```

