//to use readFile
var fs =require('fs')
//fetching the  json file
//callback function if something goes wrong 
readFile('./data.json',(err,jstring)=>{
	if(err){
		console.log("failed" ,err )
		return
		}
	console.log("data read:" ,jstring)
	//to convert it back to object
	const data =JSON.parse(jstring)
	console.log("tweet data: ",data)
	})
