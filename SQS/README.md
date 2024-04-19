<h1>SES Setup</h1>
<p>To develop the SQS sending and receiving lambda functions, an SES lambda function must be created.
This SES lambda function will contain policy permissions. One of which is an inline policy that is created through 
specifying permissions.</p>

<h2>SES Lambda Function Permissions Policies</h2>
<p>To do this you will go to the SES Lambda Function and click on the <strong>Configuration</strong> tab and then scroll down to
<strong>Permissions</strong> and click on that. Then you must click the role name link. This will send you to <strong>Permissions
policies</strong> where you will then click on <strong>Add Permissions</strong> followed by clicking on <strong>Create inline 
policy</strong> where you will specify permissions using a JSON editor.<br></p>

<h2>Creating and Attaching Policies</h2>
<p>In this JSON policy editor you must add actions. The code should look like the file named "SES-Policy.json" under the SQS folder.
You will then create the policy and attach it to your SES lambda function. Next you will click on <strong>Add permissions</strong>
followed by selecting <strong>Attach polcies</strong>. You will search for policies named <strong>AmazonSQSFullAccess</strong> and 
<strong>AWSLambdaSQSQueueExecutionRole</strong> to attach them to the SES role. In the end the policies you should see attached in
the SES role are<strong>AmazonSQSFullAccess</strong>, <strong>AWSLambdaBasicExecutionRole</strong>, 
<strong>AWSLambdaSQSQueueExecutionRole</strong>,and <strong>sespolicy</strong>. You will be reusing this role for the SQS Send and 
SQS Receive lambda functions.<br></p>

<h2>Using the SES Role</h2>
<p>For both the SQS Send and SQS Receive lambda functions, you will click on the <strong>Configuration</strong> tab and click on the 
<strong>Permissions</strong> tab. Next you will press <strong>Edit</strong> in the <strong>Execution role</strong> section to edit the role name.
The role name will be changed to attach the SES role link from the SES lambda function that was created. This attaches the SES policy that
was previously created and saves time as it does not require you to attach and repeatedly create policies.<br></p>

<h2>Tips</h2>
<p>By editing the role name and attaching the SES role, we prevent repetition of the previous steps. Some tips in creating these
lambda functions are to ensure the region you are creating every single lambda function and policy remian the same. Changing the region
means you will need to create the same lambda function or policy in another region.</p>
