import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: "us-east-2" });

export const handler = async (event) => {
  try {
    const queueUrl = "Enter your Queue url.";

    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 10, // Maximum number of messages to retrieve
      WaitTimeSeconds: 15, // Wait time for long polling (optional)
    };

    const data = await sqsClient.send(new ReceiveMessageCommand(params));
    const messages = data.Messages || [];

    if (messages.length === 0) {
      console.log("No messages found in the queue.");
      return;
    }

    messages.forEach((message) => {
      console.log("Received message:" + message.Body);
      console.log("Received message handle :" + message.ReceiptHandle)
    });
    const deleteParams = {
      QueueUrl: "Enter your Queue url.",
      ReceiptHandle: messages[0].ReceiptHandle,
    };
    const deleteResults = await sqsClient.send(new DeleteMessageCommand(deleteParams));
    console.log(deleteResults);
    console.log("Message retrieval done");
    return {
      statusCode: 200,
      body: "Messages received successfully!",
    };
  }
  catch (error) {
    console.error("Error receiving messages:", error);
    return {
      statusCode: 500,
      body: "Error receiving messages from SQS.",
    };
  }
};
