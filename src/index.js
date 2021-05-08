import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Auth from './service/auth_service';
import ImageUploader from './service/image_uploader';
import Image_file_input from './components/image_file_input/image_file_input';

const auth= new Auth();
const imageUploader= new ImageUploader();
const FileInput= props => (
<Image_file_input {...props} imageUploader={imageUploader}/>);

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>,
  document.getElementById('root')
);
