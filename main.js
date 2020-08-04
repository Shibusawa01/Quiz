'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q:'世界で一番大きな湖は？',c:['カスピ海','カリブ海','琵琶湖']},
    {q:'2の8乗は？',c:['256','64','1024']},
    {q:'5+5×5は？',c:['30','50','15']},
    {q:'次のうち、最初にリリースされた言語は？',c:['Python','JavaScript','HTML']},
    {q:'タロットカード「吊された男」の逆位置は何？',c:['13 死神','11 正義','0 愚者']},
    {q:'苺の原産地は？',c:['アメリカ','中国','イギリス']},
    {q:'イルカは漢字で何？',c:['海豚','白豚','河豚']},
    {q:'クラゲは英語で何？',c:['Jellyfish','sardine','Lamprey']},
    {q:'タピオカの原料は？',c:['キャッサバ','タロイモ','グレスデ']},
    {q:'スティーブ・ジョブズが最後に手がけたiphoneは？',c:['iphone4s','iphone6','iphoneSE']},
  ]);
  let currentNum = 0;
  let isAnwered;
  let score =0;

function shuffle(arr){
  let i = arr.length -1;
  for(let i = arr.length -1; i>0;i--){
    const j =Math.floor(Math.random() * (i+1));
  [arr[j],arr[i]] = [arr[i],arr[j]];
  }

  return arr;
}
  function checkAnswer(li){
    if(isAnwered){
      return;
    }
    isAnwered = true;
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    }else{
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz(){
    isAnwered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice =>{
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click',()=>{
      checkAnswer(li);
    })
    choices.appendChild(li);
  });

  if(currentNum === quizSet.length - 1){
    btn.textContent = 'show Score';
  }
  }

  setQuiz();

  btn.addEventListener('click',()=>{
    if(btn.classList.contains('disabled')){
      return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length -1){
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score:${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    }else{
      currentNum++;
      setQuiz();
    }
  })
}
