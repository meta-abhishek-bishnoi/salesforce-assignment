alert("Hello");
var win = window.open("", "Details", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
win.document.body.innerHTML = "<table><tr><th>Name</th><th>Class</th></tr>"+
"<tr><td>{!Student__c.Name} {!Student__c.LastName__c}</td><td>{!Student__c.Class__c}</td></tr></table>";