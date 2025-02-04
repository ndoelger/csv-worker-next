import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import { fromIni } from "@aws-sdk/credential-provider-ini" 

const s3Login = async (): Promise<S3Client> => {
  const credentials = fromIni({profile: "default"})
  console.log(credentials)

  return new S3Client({credentials})
}


export const GET = async ():Promise<Response | undefined> => {
  try {
     const s3 = await s3Login() 
    const req = await s3.send(new GetObjectCommand({
          Bucket: "vistar-dc",
          Key: "2025/01/csv-upload/stores.csv"
      }))
      const body = await req.Body?.transformToString()
      console.log(body)

      

      return new Response(body)
  } catch (error) {
    console.log(error)
  }
}
