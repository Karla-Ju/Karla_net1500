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

<h2>What is SQS?</h2>
<p>AWS offers a service called SQS which stands for Simple Queue Service. Amazon's SQS is a fully managed message queuing service used for microservices, distributed systems, and serverless applications. There are five reasons Amazon SQS is so beneficial.
<ol>
    <li>Provides security</li>
    <li>High durability</li>
    <li>High availability</li>
    <li>Scalable</li>
    <li>Reliable</li>
    <li>Customizable per demand</li>
</ol></p>
