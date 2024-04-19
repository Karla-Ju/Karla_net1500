import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: "us-east-2"});

export const handler = async (event) => {
  try {
    const params = {
      QueueUrl: "Enter the SQS Queue url.",
      MessageBody: "Hello sqs",
    };
    
    await sqsClient.send(new SendMessageCommand(params));
console.log()
    return {
      statusCode: 200,
      body: "Message sent successfully!",
    };
  } catch (error) {
      console.error("Error sending message:", error);
      return {
        statusCode: 500,
        body: "Error sending message to SQS.",
      };
  }
};