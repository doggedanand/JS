let str = "vishwajeet"

//  let greet = `Hi ${vishwajeet}`;
 let greet = ` Hi ${str}`;

 console.log(greet);


 // for space and to down string we use (/n , /t) and (/) ignore to things

 let strr = "vishwajeet \" kumar"
  console.log(strr);


  // for length use (strr.length)


  // for character position use (strr[3])

  // string concatenation (strr+str) and for the space will use " "



  // case sensitive comparison

  let str="Vishwajeet";

  if("Vishwajeet"==str){
    console.log("Equal")
  }else{
    console.log("Not Equal")
  }


  // for contamination we use an another way 
  let str1="vishwajeet";
  let str2 ="kumar";
  let str3=str1.concat(" " +str2);
  console.log(str3);



  // substring extract
  let str4 = "This is Javascript tutorial. This is good tutorial.";

  let substring = str4.substr(8,19);
  console.log(substring);


  // substring

  let str4 = "This is Javascript tutorial. This is good tutorial.";

  let substring = str4.substring(8,18);
  console.log(substring);

  // locate position of a string (indexOf) and second parameter (indexOf, 10)
  let str4 = "This is Javascript tutorial. This is good tutorial.";

  let position = str4.indexOf('good');
  console.log(substring);



  // last for reverse we use (lastIndexOf)
  let str4 = "This is Javascript tutorial. This is good tutorial.";

  let position = str4.indexOf('is');
  console.log(substring);



  // for removing the space we use (trim())
  let str4 = "    This is Javascript tutorial. This is good tutorial.        ";

  let trimStr = str4.trim();
  console.log(trimStr);


  // (trimStart()) only remove the space from starting and it's opposite (trimEnd())


  // toUpperCase() this function convert all line in upperCase and it's totally opposite is toLowerCase()

  // use of replace() , replace excepts two parameter first is what we want to replace and second what we replace to that particular position

  let str5="A process of making food by green plant is called photosynthesis";

  let replacestr= str5.replace('making','doing');
  console.log(replacestr);


  // (includes()) this function is find that word in the paragraph if the value will present it'll return true otherwise false and it's expect only one parameter

  let str6="A process of making food by green plant is called photosynthesis";

  let includesstr= str6.includes('doing');
  console.log(includesstr);    // this will return false according to function 
