function play(){
    var user_shot, user_total, balls_rem = new Number()
    user_shot = document.game_input.user_shot.value
    user_total = document.stats.total_score.value
    balls_rem = document.stats.rem_balls.value
    var comp_shot = Math.random()
    var improved_comp_shot = new Number()
    improved_comp_shot = Math.floor((comp_shot * 6) + 1)
    if(document.stats.output.value == "Out!" || document.stats.output.value == "Balls Finished"){
      refresh()
    }
    if(user_shot == improved_comp_shot){
      document.stats.output.value = "Out!"
      user_total = document.stats.total_score.value
      alert("Total Score : "+ user_total)
    }
    else{
      var temp = document.stats.total_score.value
      user_total = parseInt(temp) + parseInt(user_shot)
      document.stats.total_score.value = user_total
      var temp2 = document.stats.rem_balls.value
      balls_rem = parseInt(temp2) - 1
      if(balls_rem == 0){
        alert("Ball Finished")
        document.stats.output.value = "Balls Finished"
        balls_rem = 0
      }
      document.stats.rem_balls.value = balls_rem
    }
    var user_output = document.getElementById('your_shot')
    var comp_output = document.getElementById('computer_shot')
    if(user_shot == improved_comp_shot){
      user_output.style.color = "red"
      comp_output.style.color = "red"
    }
    else{
      user_output.style.color = "green"
    }
    user_output.innerHTML = user_shot
    comp_output.innerHTML = improved_comp_shot
  }
  function refresh(){
    alert("Game Reseted Successfully")
    location.reload(true);
}

