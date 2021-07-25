import S3 from "react-aws-s3";

const config = {
	bucketName: "myBucket",
	//  dirName: 'media', /* optional */
	region: "eu-west-1",
	accessKeyId: "JAJHAFJFHJDFJSDHFSDHFJKDSF",
	secretAccessKey: "jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf",
	s3Url: "https:/your-custom-s3-url.com/" /* optional */,
};

const ReactS3Client = new S3(config);

export function createFile(filename, newFilename) {
	ReactS3Client.uploadFile(filename, newFilename)
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
}
//  {
//    Response: {
//      bucket: "myBucket",
//      key: "image/test-image.jpg",
//      location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
//    }
//  }
// });

export function deleteFile(filename) {
	ReactS3Client.deleteFile(filename)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}
/**
   * {
   *   Response: {
   *      ok: true,
          status: 204,
          message: 'File deleted',
          fileName: 'hello-world.docx'
   *   }
   * }
   */
// });
