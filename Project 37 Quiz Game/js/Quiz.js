class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
      background("blue")
    //write code to show a heading for showing the result of Quiz
      text("Results Of The Quiz",250,250);
      }
    }
    //call getContestantInfo( ) here
    contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined) {
      var display_position = 200;
      }
    //write code to add a note here
   fill("pink")
  textSize(20)
  text("NOTE: Contestant who answered correct are highlighted in green color",130,230)
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      if(plr === "contestant" + contestant.index) {
        fill("green") 
      } 
      else {
        fill("red")
      }
  }


