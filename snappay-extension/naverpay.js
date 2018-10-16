(function () {
  var oPay = Naver.Pay.create({
    'mode': 'production', // development or production
    'clientId': 'u86j4ripEt8LRfPGzQ8' // clientId
  })

  // 직접 만드신 네이버페이 결제버튼에 click Event를 할당하세요
  var elNaverPayBtn = document.getElementById('naverPayBtn')

  elNaverPayBtn.addEventListener('click', function () {
    oPay.open({
      'merchantUserKey': '가맹점 사용자 식별키',
      'merchantPayKey': '가맹점 주문 번호',
      'productName': '상품명을 입력하세요',
      'totalPayAmount': '100000',
      'taxScopeAmount': '100000',
      'taxExScopeAmount': '0',
      'returnUrl': '사용자 결제 완료 후 결제 결과를 받을 URL'
    })
  })
}())
