ClimateScience Software Trial Task 
Trial Task 2
<hr/>
(see: index.ts, firebaseFunc.ts, percentiles.json and teamScores.json)
<hr/>
Part 1:
<br/>
• Your task is to locally build a function that could be deployed to the cloud. 
<br/>
• We would use firebase if we deployed the function, but to develop and test locally, create a json file called score Data with the following schema and a few mock entries {"teamName": "example123456789", score: 4} where the score is a float between 0 and 10. 
<br/>
• Write a typescript function that pulls all documents from this collection and calculates the 10th, 50th, and 90th percentile of the scores. Store the result in a reasonable data structure to a separate json object. 
<hr/>
Part 2: 
<br/>
If this function were to be deployed to firebase, each of the json entries would be one json. 
Write a typescript function that could pull 100k such documents from firebase's firestore in a reasonable parallel manner. 
There is no need to actually deploy the function to the cloud, but we recommend you test it locally by pulling a smaller number of documents using the free tier. 
<hr/>
Part 3: 
<br/>
What else would you do if this were to be deployed to production? No need to do any of this —just provide a list of things.
<br/>
<hr/>
## Recommends:
Part 3:
If this function were to be deployed to production, here are some additional considerations and best practices to ensure its reliability, security, and performance:
<br/>
- Error Handling: Implement comprehensive error handling to catch and handle potential errors and failures gracefully. This includes handling network issues, database errors, and other unexpected conditions.
<br/>
- Logging and Monitoring: Set up logging and monitoring to track the function's performance, errors, and usage patterns. This will help identify issues and bottlenecks, enabling quick troubleshooting and performance optimization.
<br/>
- Rate Limiting: Implement rate limiting to prevent abuse and ensure fair usage of the function's resources. This will help protect the function and the Firestore database from excessive requests.
<br/>
- Authentication and Authorization: Enforce proper authentication and authorization mechanisms to restrict access to the function and ensure that only authorized users or services can call it.
<br/>
- Security Rules: Configure Firestore security rules to control access to the data and enforce data validation and restrictions.
<hr/>
