var speech = "I am a good person. I don't snore at night";
console.log(speech.length);
//------------------------------------------------------------
var speech = "I am a good person. I don't snore at night";
console.log(speech[2]);
//--------------------------------------
var speech = "I am a good person. I don't snore at night";
console.log(speech[3]);
//----------------------------------------
var speech = "I am a good person. I don't snore at night";
for (var i=0; i<speech.length;i++){
	var char=speech[i];
	if (char == " "){
		count++;
	}
}
console.log(count);