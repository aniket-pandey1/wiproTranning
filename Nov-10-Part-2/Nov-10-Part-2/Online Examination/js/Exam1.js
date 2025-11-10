MaxQuestions = 10;
QueryList = Array(MaxQuestions);
ChoiceList = new Array(MaxQuestions);
IsOptionSelected = false;
for (var i = 0 ; i < MaxQuestions ; i++)
{
    ChoiceList[i] = new Array(4);
}
FinalAnswers = new Array(MaxQuestions);

CurrentIndex = 0;
TotalScore = 0;
UserSelection = 0;
AnswerKey = 5;

function recordChoice(UserAns)
{
	AnswerKey = UserAns;
	IsOptionSelected = true;
}



function initializeExam()
{
	loadCurrentQuestion();
}

function loadCurrentQuestion()
{
	document.getElementById("Question").innerHTML = "(" + (CurrentIndex + 1)+") : " + QueryList[CurrentIndex];
	document.getElementById("Option0").innerHTML = "(a) " + ChoiceList[CurrentIndex][0];
	document.getElementById("Option1").innerHTML = "(b) " + ChoiceList[CurrentIndex][1];
	document.getElementById("Option2").innerHTML = "(c) " + ChoiceList[CurrentIndex][2];
	document.getElementById("Option3").innerHTML = "(d) " + ChoiceList[CurrentIndex][3];		
	document.getElementById("Opt1").checked = false;	
	document.getElementById("Opt2").checked = false;	
	document.getElementById("Opt3").checked = false;	
	document.getElementById("Opt4").checked = false;
	AnswerKey = 5;
}


function processNext()
{      
	if(AnswerKey == FinalAnswers[CurrentIndex])
	{
		TotalScore++;
	}
	if(IsOptionSelected)
	{
   	if(CurrentIndex < MaxQuestions - 1)
   	{	
   		CurrentIndex++;
   		loadCurrentQuestion();
   	}
   	else
   	{
   		alert("End of Examination \n"+"Total Score is : "+TotalScore+"");
   	}
   	IsOptionSelected = false;
	}
	else
	{
       alert("No option choosed yet.... ");
	}
}


QueryList [0] = "Which country won the inaugural T20 World Cup in 2007?";
ChoiceList[0][0] = "Pakistan";
ChoiceList[0][1] = "India";
ChoiceList[0][2] = "Australia";
ChoiceList[0][3] = "South Africa";
FinalAnswers[0] = 2;


QueryList [1] = "Who holds the record for the highest individual score in Test cricket?";
ChoiceList[1][0] = "Brian Lara";
ChoiceList[1][1] = "Sachin Tendulkar";
ChoiceList[1][2] = "Matthew Hayden";
ChoiceList[1][3] = "Virat Kohli";
FinalAnswers[1] = 1;


QueryList [2] = "What is the term for a delivery bowled by a slow bowler that spins in the opposite direction?";
ChoiceList[2][0] = "Leg Break";
ChoiceList[2][1] = "Off Break";
ChoiceList[2][2] = "Googly";
ChoiceList[2][3] = "Doosra";
FinalAnswers[2] = 3;


QueryList [3] = "Which Indian cricketer is known as 'The Wall'?";
ChoiceList[3][0] = "Sourav Ganguly";
ChoiceList[3][1] = "VVS Laxman";
ChoiceList[3][2] = "Rahul Dravid";
ChoiceList[3][3] = "MS Dhoni";
FinalAnswers[3] = 3;

                                                                         
QueryList [4] = "The term 'Mankading' is named after which player?";
ChoiceList[4][0] = "Vinoo Mankad";
ChoiceList[4][1] = "Sunil Gavaskar";
ChoiceList[4][2] = "Kapil Dev";
ChoiceList[4][3] = "Bishen Bedi";
FinalAnswers[4] = 1;

QueryList [5] = "How many balls are there in one over in cricket?";
ChoiceList[5][0] = "5";
ChoiceList[5][1] = "6";
ChoiceList[5][2] = "7";
ChoiceList[5][3] = "8";
FinalAnswers[5] = 2;

QueryList [6] = "The Ashes series is played between which two countries?";
ChoiceList[6][0] = "India and Pakistan";
ChoiceList[6][1] = "Australia and England";
ChoiceList[6][2] = "South Africa and Australia";
ChoiceList[6][3] = "New Zealand and South Africa";
FinalAnswers[6] = 2;

QueryList [7] = "Which format of cricket is played for five days?";
ChoiceList[7][0] = "ODI";
ChoiceList[7][1] = "T20";
ChoiceList[7][2] = "Test";
ChoiceList[7][3] = "The Hundred";
FinalAnswers[7] = 3;

QueryList [8] = "Who was the first batsman to score a double century in ODI cricket?";
ChoiceList[8][0] = "Chris Gayle";
ChoiceList[8][1] = "Rohit Sharma";
ChoiceList[8][2] = "Sachin Tendulkar";
ChoiceList[8][3] = "Virender Sehwag";
FinalAnswers[8] = 3;

QueryList [9] = "What is the minimum number of players required for a game of cricket to start?";
ChoiceList[9][0] = "9";
ChoiceList[9][1] = "10";
ChoiceList[9][2] = "11";
ChoiceList[9][3] = "12";
FinalAnswers[9] = 2;