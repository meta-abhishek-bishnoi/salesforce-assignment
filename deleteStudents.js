{!REQUIRESCRIPT('soap/ajax/35.0/connection.js')}
var selectedStudentIds = {!GETRECORDIDS($ObjectType.Student__c)}

if(selectedStudentIds[0] == null){
 alert('Select Students To Delete');
}else{
 alert(selectedStudentIds);
 sforce.connection.deleteIds(selectedStudentIds);
 location.reload(true);
}