MaxQuestions = 5;// Edit this value before adding questions 
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


QueryList [0] = "The father of C,C++ & Unix is";
ChoiceList[0][0] = "Forouzan";
ChoiceList[0][1] = "Dennis Ritchie";
ChoiceList[0][2] = "Andrew Tenenbaum";
ChoiceList[0][3] = "Dijkstra";
FinalAnswers[0] = 2;


QueryList [1] = "The Open source among following is  ";
ChoiceList[1][0] = "Windows XP";
ChoiceList[1][1] = "Mac OS X";
ChoiceList[1][2] = "Linux Ubuntu";
ChoiceList[1][3] = "Sun Solaris";
FinalAnswers[1] = 4;


QueryList [2] = "Pancake Sorting Algorithm and BASIC Interpreter was written by";
ChoiceList[2][0] = "Steve Jobs";
ChoiceList[2][1] = "Steve William";
ChoiceList[2][2] = "Bill Gates";
ChoiceList[2][3] = "Jerry yang";
FinalAnswers[2] = 3;


QueryList [3] = "Larry page and Sergei Brinn are Co-Founders of ";
ChoiceList[3][0] = "Yahoo";
ChoiceList[3][1] = "Rediff";
ChoiceList[3][2] = "Google";
ChoiceList[3][3] = "Apple";
FinalAnswers[3] = 3;

                                                                         
QueryList [4] = "The first computer to defeat Chess Grandmaster was";
ChoiceList[4][0] = "Chess Zeus";
ChoiceList[4][1] = "Armageddon";
ChoiceList[4][2] = "White Knight";
ChoiceList[4][3] = "Deep Blue";
FinalAnswers[4] = 4;