like = 0

function addLike(){
  like = 1 + like
  
  if(like == 0 || like > 1){
    botao.innerHTML = like + " Likes"
  }
  
  if(like == 1){
    botao.innerHTML = like + " Like"
  }
  
}