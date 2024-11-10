export interface Iprops {
  id: string;
  artist: string;
  title: string;
  music: string;
  lyrics: string[];
  img: string;
}

export interface Itracks {
  tracks: Iprops[];
}

export const tracks = [
  {
    id: "0",
    artist: "IU",
    title: "Strawberry Moon",
    music: "Audio/strawberryMoon.mp3",
    lyrics: [
      "달이 익어가니 서둘러 젊은 피야",
      "민들레 한 송이 들고",
      "사랑이 어지러이 떠다니는 밤이야",
      "날아가 사뿐히 이루렴",
      "팽팽한 어둠 사이로 떠오르는 기분",
      "이 거대한 무중력에",
      "혹 휘청해도",
      "두렵진 않을 거야",
      "푸르른 우리 위로",
      "커다란 strawberry moon 한 스쿱",
      "나에게 너를 맡겨볼래 eh-oh",
      "바람을 세로질러",
      "날아오르는 기분 so cool",
      "삶이 어떻게 더 완벽해 ooh",
      "다시 마주하기 어려운 행운이야",
      "온몸에 심장이 뛰어 Oh",
      "오히려 기꺼이 헤매고픈 밤이야",
      "너와 길 잃을 수 있다면",
      "맞잡은 서로의 손으로 출입구를 허문",
      "이 무한함의 끝과 끝",
      "또 위아래로 비행을 떠날 거야",
      "푸르른 우리 위로",
      "커다란 strawberry moon 한 스쿱",
      "나에게 너를 맡겨볼래 eh-oh",
      "바람을 세로질러",
      "날아오르는 기분 so cool",
      "삶이 어떻게 더 완벽해 ooh",
      "놀라워 이보다",
      "꿈같은 순간이 또 있을까 (더 있을까)",
      "아마도 우리가 처음 발견한",
      "오늘 이 밤의 모든 것, 그 위로 날아",
      "푸르른 우리 위로",
      "커다란 strawberry moon 한 스쿱",
      "세상을 가져보니 어때 eh-oh",
      "바람을 세로질러",
      "날아오르는 기분 so cool",
      "삶이 어떻게 더 완벽해 ooh",
    ],
    img: "img/strawberry_moon.jpg",
  },
  {
    id: "1",
    artist: "IU",
    title: "LILAC",
    music: "Audio/라일락.mp3",
    lyrics: [
      "나리는 꽃가루에 눈이 따끔해 (아야)",
      "눈물이 고여도 꾹 참을래",
      "내 마음 한켠 비밀스런 오르골에 넣어두고서",
      "영원히 되감을 순간이니까",
      "우리 둘의 마지막 페이지를 잘 부탁해",
      "어느 작별이 이보다 완벽할까",
      "Love me only till this spring",
      "오 라일락 꽃이 지는 날 goodbye",
      "이런 결말이 어울려",
      "안녕 꽃잎 같은 안녕",
      "하얀 우리 봄날의 climax",
      "아 얼마나 기쁜 일이야",
      "Ooh, ooh",
      "Love me only till this spring",
      "봄바람처럼",
      "Ooh, ooh",
      "Love me only till this spring",
      "봄바람처럼",
      "기분이 달아 콧노래 부르네 (랄라)",
      "입꼬리는 살짝 올린 채",
      "어쩜 이렇게 하늘은 더 바람은 또 완벽한 건지",
      "오늘따라 내 모습 맘에 들어",
      "처음 만난 그날처럼 예쁘다고 말해줄래",
      "어느 이별이 이토록 달콤할까",
      "Love resembles misty dream",
      "오 라일락 꽃이 지는 날 goodbye",
      "이런 결말이 어울려",
      "안녕 꽃잎 같은 안녕",
      "하얀 우리 봄날의 climax",
      "아 얼마나 기쁜 일이야",
      "Ooh, ooh",
      "Love resembles misty dream",
      "뜬구름처럼",
      "Ooh, ooh",
      "Love resembles misty dream",
      "뜬구름처럼",
      "너도 언젠가 날 잊게 될까",
      "지금 표정과 오늘의 향기도",
      "단잠 사이에 스쳐간",
      "봄날의 꿈처럼",
      "오 라일락 꽃이 지는 날 goodbye",
      "너의 대답이 날 울려",
      "안녕 약속 같은 안녕",
      "하얀 우리 봄날에 climax",
      "아 얼마나 기쁜 일이야",
      "Ooh, ooh",
      "Love me only until this spring",
      "봄바람처럼",
      "Ooh, ooh (oh)",
      "Love me only until this spring",
      "봄바람처럼",
      "Ooh, ooh",
      "Love resembles misty dream",
      "뜬구름처럼",
      "Ooh, ooh",
      "Love resembles misty dream",
      "뜬구름처럼",
    ],
    img: "img/라일락.jpg",
  },
  {
    id: "2",
    artist: "NCT DREAM",
    title: "Hello Future",
    music: "Audio/Hello Future.mp3",
    lyrics: [
      "Big dreams and big thrills",
      "Flying high 터무니없는 상상해봐",
      "네 눈앞에 달려들고 있는 별",
      "낚아 채 불을 태워 봐",
      "시작이라는 걸 넌 믿을 수 있겠니?",
      "이제야 사랑을 알 것 같아",
      "Ready or not 가는 거야 나를 믿어",
      "Soldiers knocking doors down, yelling out",
      "전쟁 전쟁 같던 시간들은",
      "모두 뒤로 보내 (ay) 가슴이 소리치네 (yeah)",
      "달려가 날아 봐",
      "If you're rocking with me, oh, oh (come on)",
      "Here we go, here we go, satellite radio",
      "내 미래에 전해 줘",
      "온 세상과 저 광야 위로 (ay)",
      "후회 없이 사랑했다고 말하게",
      "기다렸어 어서 와",
      "어디든 we're coming together",
      "아무 걱정 하지 마",
      "잘 될 거야 hello future",
      "너를 만나 같이 더 빛나 (yeah yeah)",
      "Ey we're on the way up, we're on the way up (yeah yeah)",
      "아름다운 시간만 쌓자 (yeah yeah)",
      "We're going way up, we're going (yeah yeah yeah)",
      "On our way up, hello future (yeah)",
      "On our way up, hello future",
      "Ey 미래의 너를 조우하게 됐어",
      "경계 위로 손을 맞대면",
      "우린 너무 닮아 있어 (yo)",
      "뭘 더 찾게 될지 (uh) 결국 웃게 될지 (ay)",
      "지금부턴 (ay) 운명이라고 해 (bang, bang, bang)",
      "Fire fire 자욱한 연기 속에",
      "살아남은 키 작은 꽃처럼 (yeah, straight facts)",
      "같은 시간 속에 너를 사랑하고 있어",
      "Here we go, here we go",
      "날개를 펼치고",
      "또 꺾이고 다쳐도",
      "누구보다 강한 너잖아",
      "미래의 미래에도 널 사랑할 나란 걸",
      "기다렸어 어서 와",
      "어디든 we're coming together",
      "아무 걱정 하지 마",
      "잘 될 거야 hello future",
      "너를 만나 같이 더 빛나 (yeah yeah)",
      "Ey we're on the way up, we're on the way up (yeah yeah)",
      "아름다운 시간만 쌓자 (yeah yeah)",
      "We're going way up, we're going (yeah yeah)",
      "Ey, I'm tryna' center me",
      "Hey where your center be?",
      "흔들리지 않게 걸어 나아갈 수 있을지",
      "Too many cynical 거꾸로 갔던 entropy",
      "그 어디쯤 너 기다리고 있을지",
      "멀지 않아 눈을 떠 봐",
      "내가 원한 모든 건 너뿐이라고",
      "We're on our way up",
      "타 버린 채 여린 온기의",
      "남은 잿더미 속에 ready to clap back",
      "그리 멀지 않은 peace",
      "아픈 시간이 다만 짧기를 바라고 또 원했지",
      "Who you gon' believe?",
      "기다렸어 어서 와",
      "어디든 we're coming together",
      "아무 걱정 하지 마",
      "잘 될 거야 hello future",
      "너를 만나 같이 더 빛나 (yeah yeah)",
      "Ey we're on the way up, we're on the way up (yeah yeah)",
      "아름다운 시간만 쌓자 yeah yeah",
      "We're going way up",
      "We're going way up (ooh woo yeah)",
      "곁에 함께 있어줘 (내 곁에서)",
      "오직 너만이 내 미래라는 걸",
      "Just keep looking to the stars",
      "(Ooh yeah) (hello future)",
      "널 기다렸어 (ooh)",
      "(Hello future) (whoa whoa whoa)",
      "Hello future",
    ],
    img: "img/hello.jpg",
  },
  {
    id: "3",
    artist: "Crush",
    title: "잊어버리지마",
    music: "Audio/잊어버리지마.mp3",
    lyrics: [
      "너와 나 언젠가 남이 되어도",
      "영영 닿을 수 없는 사이 되어도",
      "잊어버리지마 잃어버리지마",
      "혹시나 다른 사람의 손 잡고 있어도",
      "영영 닿을 수 없는 곳에 있어도",
      "잊어버리지마 잃어버리지마",
      "따뜻해 볼이 맞닿을 때",
      "살며시 시린 내 손 잡아줄 때",
      "차가운 세상에 지친 내 맘을",
      "온기로 감싸네 내 눈에 담긴 너의 얼굴",
      "내 품에 잠든 너의 모습",
      "이대로 멈췄으면 해",
      "꽉 잡은 두 손 놓치면 안돼",
      "너와 나 언젠가 남이 되어도",
      "영영 닿을 수 없는 사이 되어도",
      "잊어버리지마 잃어버리지마",
      "혹시나 다른 사람의 손 잡고 있어도",
      "영영 닿을 수 없는 곳에 있어도",
      "잊어버리지마 잃어버리지마",
      "마주 앉아 널 바라보는 지금이",
      "영원하길 바래",
      "혹시나 시간이 우릴 질투 할까 봐",
      "사실 걱정 돼",
      "변치 마 always by my side",
      "영원히 함께 my love",
      "언젠가 날 기억해주길",
      "한번쯤은 뒤 돌아보길",
      "부디 놓지 말아줘",
      "우릴 계속 바라봐주길",
      "Oh My love 시간이 지나 baby",
      "너와 나 우리가 남이 되어도",
      "잊어버리지마 날 잊어버리지마",
      "이 노랠 잊어버리지마",
    ],
    img: "img/잊어버리지마.jpg",
  },
];
