import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-2"});

export const handler = async(event,context) => {
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ["Enter your email address."],
    },
    Message: {
      Body: {
        Text: { Data: "This is a sample email from the AWS SES Lambda"},
      },
      Subject: { Data: "Enter the desired email subject."},
    },
    Source: "Enter your email address.",
  });
  try {
    let response = await ses.send(command);
    return response;
  }
  catch (error) {
    console.log(error);
  }
  finally {
  }
};
