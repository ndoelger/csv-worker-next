const uploadCSV = async (): Promise<void> =>{
    try {
      const s3 = await s3Login() 
      const req = await fetch(CSV_LINK)
      const body = await req.json()
  
      const string = JSON.stringify(body)
  
      await s3.send(
        new PutObjectCommand({
        Bucket: "vistar-dc",
        Body: string,
        Key: "2025/01/aws-cache/test"}))
  
    } catch (error) {
      console.log(error)
    }
  }