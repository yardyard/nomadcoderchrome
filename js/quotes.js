const quotes = [
    {
      quote: "하기 싫어도 해라 감정은 사라지고, 결과는 남는다.",
      author: "Walt Disney",
    },
    {
      quote: "도망친 곳에 낙원은 없다.",
      author: "John Lennon",
    },
    {
      quote:
        "지금 당신이 하고있는 것에 최선을 다해라.",
      author: "Saint Augustine",
    },
    {
      quote: "You never walk alone",
      author: "Helen Keller",
    },
    {
      quote: "To dare is to do",
      author: "Tottenham Hotspur",
    },
    {
      quote: "모든 것이 형통하리니 강하고 담대하라.",
      author: "Church, ss",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  


  // HTML의 quote 아이디를 가진 span의 첫번째와 마지막 자식을 연결
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  // quotes 배열에 있는 값들(0부터 9번 인덱스까지)을 랜덤하게 변수에 저장함.
  // 또한 quotes.length를 곱함으로서 명언의 길이에 맞게 자동으로 랜덤값 조정됌.
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // quote변수, 즉 HTML span의 첫번째 자식에 랜덤하게 저장된 명언을 글자로 출력한다. 
  quote.innerText = todaysQuote.quote;
    
  // author변수, 즉 HTML span의 마지막 자식에 랜덤하게 저장된 작가를 글자로 출력한다.
  author.innerText = todaysQuote.author;