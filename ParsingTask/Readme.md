JavaScript Assignment
const labels = ['"":"tie","1":"nail polish"',{},[],'{Shoes:brown}', '-',"[{'Rings' : [Diamond, Gold]]}",'"{"T-Shirt":"white"}"',55, '\0','\\0','{"Pants":"black"}','*',{"Pants":["Jeans", "Dress Pant",'{"Pants":"black"}' ]},'{"Hat"}' ];

Please write program which can tell the following stats by parsing the above labels Array:
1. How many different distinct labels were found.
2. Some of the labels are non Alphabets please maintain a separate count of them.
3. Some labels are not proper JSON strings please do the needful to read the KEY : VALUE pair inside those strings, and construct a proper JSON object with KEY : VALUE by removing double quotes / single quotes , etc.Then extract the information to prepare report.
4. If there is only KEY present i.e. ‘ {Hat} ‘ etc then please fix it by making it in JSON format i.e. ‘{ “Hat” : “” }’
5. If there are duplicate Black pants then please have them reflected in the report.
6. If the key is empty string then please name it the same as its value i.e. “ “”:”tie” should become “tie”:tie”
7. Please display How many Items were found in Garments, Shoes, Rings, Hats with their type as shown in the sample report below.
8. Please ignore if any value inside the labels Array is empty Object.
9. Please ignore if any value inside the labels Array is empty Array.
10. If there are integer values inside the labels Array please reflect them in the report.
11. Please construct a report similar or close to the below i.e.
{ Tie : 1 },{Nail Polish: 1},{ Shoes: 1, type: brown },{ Rings: 2 , type: [Diamond , Gold] },{T-Shirt: 1, type: white},{Pants: 3, type: [ black, Jeans, Dress] },{Hats: 1},{ Total Distinct Labels: 7},{Total Non-Alpha: 5 }
