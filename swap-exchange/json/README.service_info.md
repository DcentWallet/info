# service_info.json
swap-exchange 서비스 관련 configuration 값을 정의 한다. 

- `restriction_policy`: 서비스 제한 정책 적용 여부 
- `restricted_countries`: 서비스가 제한되는 국가 코드 
- `restricted_ips`: 서비스가 제한되는 IP 
- `allowed_ips`: 서비스가 허용되는 IP(제한된 국가에 속해도 서비스 허용)

> 앞으로 추가되는 서비스 configuration 을 계속 추가해 나갈 수 있습니다. 


**예시**
```
{
    "restriction_policy": true,
    "restricted_countries": [
        "KR"
    ],
    "restricted_ips": [
        "111.112.113.114"
    ],
    "allowed_ips": [
        "555.552.553.554"
    ]
}
```