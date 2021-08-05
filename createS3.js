const {PutObjectCommand, CreateBucketCommand} = require('@aws-sdk/client-s3');
const {s3Client} = require('./sampleClient');

const params = {
    Bucket : "cylee-bucket01",
    Key: 'sample_upload.txt',
    Body: "BODY Something",
};

const run = async () => {
    try{
        const data = await s3Client.send(
            new CreateBucketCommand({ Bucket : params.Bucket})
        );
        
        console.log(data);
        console.log("Sccessfuly created a bucket called ", data.Location);
        
        return data;

    } catch (err) {
        console.error(err);
    }
    try{
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );

        return results;
    } catch (err) {
        console.error(err);
    }
}

run();
