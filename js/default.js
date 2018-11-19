var number = Math.floor(Math.random()*3);
ver ans = parseInt(window.prompt('数を当てて見せろ、０～２だ。'));

var mes;
if(ans === number)
{
  mes = 'あたりだ'; 
}
else if(ans < number)
{
  mes = 'ばかめ！もっと大きいわ！'; 
}
else if(ans > number)
{
  mes = 'ばかめ！もっと小さいわ！'; 
}
else
{
  mes = 'お前は馬鹿か？'; 
}

document.getElementById('choice').textContent = mes;
