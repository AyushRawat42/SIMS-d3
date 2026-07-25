function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} environment variable is required but was not provided.`);
  }
  return value;
}

export function getAwsConfig() {
  return {
    region: process.env["AWS_REGION"]?.trim() || process.env["AWS_DEFAULT_REGION"]?.trim() || "ap-south-1",
    accessKeyId: process.env["AWS_ACCESS_KEY_ID"]?.trim(),
    secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"]?.trim(),
    sessionToken: process.env["AWS_SESSION_TOKEN"]?.trim(),
    tableName: process.env["DYNAMODB_ADMISSIONS_TABLE"]?.trim() || "SIMS_Admissions",
  };
}

export function getSmtpConfig() {
  return {
    host: required("SMTP_HOST"),
    port: Number(process.env["SMTP_PORT"]?.trim() || "587"),
    user: required("SMTP_USER"),
    pass: required("SMTP_PASS"),
    from: process.env["SMTP_FROM"]?.trim() || required("SMTP_USER"),
    to: required("SMTP_TO"),
  };
}
