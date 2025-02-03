import { FileUploader } from '@aws-amplify/ui-react-storage';
//import { getUrl, uploadData } from "aws-amplify/storage";
//import { uploadData } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';

export default function S3ImageUpload() {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="amplify-amplifyvitereactt-amplifydataamplifycodege-dtraotonwybi/images"
      autoUpload={true}
      maxFileCount={1}
      isResumable
    />
  );
};