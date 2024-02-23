# Apex

## Wrapper Class

> It's create a new Instance for that object values.

## Batch Apex

> Batch apex is a part of asynchronous. 

### Features:

1. In batch apex can be fetched upto 50million.

### Use 

**Purpose:-** as we know that in salesforce there are some governor limits. to access the data more than the governor limits we use batch apex.
  - *example-1* as we know the governor limits of total record retrived by soql query is 50000(50k) but in batch apex 50 million. if we use normal class then give exception like (System.LimitException: Too many query rows: 50001).

```js
List<Account> acc=[select id from account]; 
```
It will fetch if the records is not more than the 50k else will occur exception.

> If we want to run batch apex then we have to implements batchable interface.

		
**Synatax of batch apex class:-**

```js
global class Sadiq implements Database.batchable <Sobject>{}
```

There are *three* methods in batchable interface.

1. **start()** - fetch all the records on which the logic has to run.
    - syntax:-
      ```js
      global Database.queryLocator or(Iterable<Sobject>) start(Database.batchableContext bc){}
      ```
    -	Database.queryLocator:
        - if we want to write a soql query and get the data then we use it. 
        - we can use 50 millions records using soql. normal class only 50k.

        ```js
        public Database.QueryLocator start(Database.BatchableContext bc){
                String query='SELECT id FROM account';
                return Database.getQueryLocator(query); send to execute method.
          }
        ```
    - Iterable<Sobject>:-
        - we won't fetch the data using soql query here we write complexed logic only 50k records.
    
        ```js
        Public Iterable<Sobject> start(Database.BatchableContext bc){
          return Database.getQueryLocator('hi');
        }
      ```
1. **execute()**- In this method we do bussiness logic as per the need.
    - syntax:-
      ```js
      global void execute(Database.batchableContext bc, List<Object> obj){}


      global void execute(Database.batchableContext bc,List<Account> acc){
        for(Account a: acc){
          a.rating='hot';
        }
        update acc;
      }
      ```
1. **finish()** - In this method we can do final task what you want like send an email etc.
    - syntax:-
      ```js
      global void finish(Database.batchableContext bc){}
      ```
		> NOTE:- To Schedule and run the batch apex below are the following data.
      ```js
			ClassName cm = new ClassName();
			Id jobId = Database.executeBatch(cm,5);  //here 5 means dividing into 5 badge
      ```
		>	if we not give by default it will take 200, Min 1 badge, Max 2000 badge

### Database.stateful:- 

1. It is an interface which is used to transfer the data for one batch to other batch.
1. If we dont use Database.stateful we can not carry or anything from one batch to other batch so carry or anything from one batch to other batch have to implements `Database.stateful` interface.

**example:-**
  - I have to count the loop timing then we create a instance variable and count they will count only for one one 
					batch if we use Database.stateful implements it will work as static cout for each batch it will count total in one.

**syntax:-**
  - ```js
      global class sadiq implements Database.batchable <Sobject>, Database.stateful{}
    ```

   
### simple program on batch apex

```js
global class ProjectResourceManagerAlerter implements Database.Batchable <Sobject> {
    global Database.QueryLocator start(Database.BatchableContext bc) {
        String query = 'SELECT Id, End_Date__c, Status__c, Project__r.Name, Project__r.Status__c, Project__r.End_Date__c, Resource__r.name, Resource__r.email FROM project_resource__c';
        return Database.getQueryLocator(query);        
    }
    global void execute(Database.BatchableContext bc, List<Project_Resource__c> projectResourceList) {
        List<string> email = new List<String>();
        for (Project_Resource__c projectResource : projectResourceList) {
            if (projectResource.End_Date__c > projectResource.Project__r.End_Date__c && projectResource.Status__c == 'Active' && projectResource.Project__r.Status__c == 'Completed') {
                email.add(projectResource.Resource__r.email);                
            }            
        }
        System.debug('list of email'+email);
        System.debug('size of listofemail'+email.size());
    }
    global void finish(Database.BatchableContext bc) {
        
    }
}
```