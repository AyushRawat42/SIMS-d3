import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { getAwsConfig } from "./env.js";

export type AdmissionEnquiry = {
  enquiryId: string;
  fullName: string;
  email: string;
  phone: string;
  courseInterested: string;
  createdAt: string;
};

let docClient: DynamoDBDocumentClient | null = null;

function getDocClient(): DynamoDBDocumentClient {
  if (docClient) return docClient;

  const { region, accessKeyId, secretAccessKey, sessionToken } = getAwsConfig();

  const client = new DynamoDBClient({
    region,
    ...(accessKeyId && secretAccessKey
      ? {
          credentials: {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken ? { sessionToken } : {}),
          },
        }
      : {}),
  });

  docClient = DynamoDBDocumentClient.from(client, {
    marshallOptions: { removeUndefinedValues: true },
  });

  return docClient;
}

export async function saveAdmissionEnquiry(enquiry: AdmissionEnquiry): Promise<void> {
  const { tableName } = getAwsConfig();
  const pk = `ENQUIRY#${enquiry.enquiryId}`;

  await getDocClient().send(
    new PutCommand({
      TableName: tableName,
      Item: {
        PK: pk,
        SK: "META",
        GSI1PK: "STATUS#NEW",
        GSI1SK: `${enquiry.createdAt}#ENQUIRY#${enquiry.enquiryId}`,
        fullName: enquiry.fullName,
        email: enquiry.email,
        phone: enquiry.phone,
        courseInterested: enquiry.courseInterested,
        status: "NEW",
        createdAt: enquiry.createdAt,
        enquiryId: enquiry.enquiryId,
      },
      ConditionExpression: "attribute_not_exists(PK)",
    }),
  );
}
