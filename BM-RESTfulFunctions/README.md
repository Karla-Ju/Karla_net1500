<h1>Big Mover Serverless Web Application</h1>
<p>The scope of this project was to build a serverless web application. The serverless web application
would collect stock tickers that are opening significantly higher than the previous day. These stock tickers would then be saved into Amazon DynamoDB. An email would then be sent to users with the latest big movers upon triggers configured within lambda functions.</p>

<h2>What is Lambda?</h2>
<p>An AWS Lambda is a computing service that enables you to run code without servers. AWS Lambda functions have handler functions, event objects, and context objects. Many languages can be used to create lambda functions. Languages supported are Java, Go, PowerShell, Node.js, C#, Python, and Ruby. Lambda functions can also be triggered by configuring triggers through Amazon EventBridge. These different rules can be created and attached to multiple lambda functions the same way execution roles can be attached. The following are triggers created to collect and send out big movers daily in the morning before the stock market opens.<img width="440" alt="BigMoverRole-Trigger" src="https://github.com/Karla-Ju/Karla_net1500/assets/165040932/c2d7b660-ddd9-4446-8a19-2ab1b72ad223"><img width="479" alt="BigMoverEmailRole-Trigger" src="https://github.com/Karla-Ju/Karla_net1500/assets/165040932/21f34c6e-9b5e-48b2-8a21-999c999e0a57"></p>
<p>There are multiple benefits to using Lambda functions.<br>
These consist of:
<ul>
    <li>Load balancing</li>
    <li>Autoscaling</li>
    <li>Handling failures</li>
    <li>Security isolation</li>
    <li>OS management</li>
    <li>Managing utilization</li>
</ul></p>

<h2>What is SES?</h2>
<p>SES (Simple Email Service) is another service provided by AWS. It is a highly scalable inbound and outbound email service. One of the highlights of SES is its flexibility, scalability, and cost-effectiveness as a cloud-based email service. There are multiple reasons to use SES.<br>
You can:<br>
<ul>
    <li>Send emails</li>
    <li>Receive emails</li>
    <li>SMTP (Simple Mail Transfer Protocol), a technical standard for transmitting electronic mail/email over a network</li>
    <li>use APIs (Application Programming Interface)</li>
    <li>use CLIs (Command Line Interface)</li>
</ul></p>
<h3>SES Setup</h3>
<p>To begin you will navigate to the SES console and click on <strong>Get started</strong>. Next you will verify your email by selecting <strong>Email address</strong> as the identity type, enter your email address, add tags if you would like, and click <strong>Create identity</strong>. A verification is required to continue, an email will be sent to the email you entered and you can press on a link to verify the email. A <strong>Congratulations</strong> screen should pop up telling you that your email address has been verified. To send a test email, navigate to the sandbox environment in SES, click on <strong>View Get set up page</strong>, scroll down to <strong>Send test email</strong>, and fill in the message details with what you would like. Lastly, press <strong>Send test email</strong> which should be a orange button. You can then follow the README.md file under the <strong>SQS</strong> folder to follow instructions to finish setting up SES.</p>

<h2>What is SQS?</h2>
<p>AWS offers a service called SQS which stands for Simple Queue Service. Amazon's SQS is a fully managed message queuing service used for microservices, distributed systems, and serverless applications. There are six reasons Amazon SQS is so beneficial.
<ol>
    <li>Provides security</li>
    <li>High durability</li>
    <li>High availability</li>
    <li>Scalable</li>
    <li>Reliable</li>
    <li>Customizable per demand</li>
</ol></p>
<h3>How to Set Up SQS</h3>
<p>To begin you will select Simple Queue Service under the <strong>Services</strong> section in the search bar. To get started you will create a queue by clicking <strong>Create queue</strong>. Name the queue with something that describes its use (i.e. Jane-Mover-Queue). The type to select is <strong>Standard</strong>. You can then continue on to create the queue and review options to see if it is something you would like. For example a key can be entered under the <strong>Tags</strong> section. You can click on <strong>Send and receive messages</strong> to create a message or poll for messages. In order to use a queue you must have SES set up per the instructions from above.</p>