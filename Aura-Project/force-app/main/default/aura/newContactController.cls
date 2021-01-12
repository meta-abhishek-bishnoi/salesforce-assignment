public with sharing class newContactController {
    
     @AuraEnabled
    public static Contact saveContact(Contact contactToSave) {
        try{
           
        upsert contactToSave ;
            System.debug('done '+contactToSave.id);
        return contactToSave ; 
        }catch(Exception e){
            System.debug(e);
            return null;
        }
    }
}