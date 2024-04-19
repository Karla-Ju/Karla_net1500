const sqs = new SQSClient({ region: "us-east-2" });

import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs";

export const handler = async (event) => {
  try {
    const queueURL = "Enter your SQS queue url.";
    
    const params = {
      QueueUrl: "Enter your SQS queue url.",
      MaxNumberOfMessages: 10, // Maximum number of messages to retrieve
      WaitTimeSeconds: 10, // Wait time for long polling (optional)
    };
    
    const data = await sqs.send(new ReceiveMessageCommand(params));
    const messages = data.Messages || [];
    
    if (messages.length == 0) {
      console.log("No messages found in the queue.");
      return;
    }
    
    messages.forEach((message) => {
      console.log("Received message:", message.Body);
      // You can process the message further here
    });
  }
  catch (error) {
    console.log(error);
  }
};