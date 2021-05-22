import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Auth from './service/auth_service';
import ImageUploader from './service/image_uploader';
import Image_file_input from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import { memo } from 'react';

const auth= new Auth();
const cardRepository= new CardRepository();
const imageUploader= new ImageUploader();
const FileInput= memo(props => (
  <Image_file_input {...props} imageUploader={imageUploader}/>));

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} FileInput={FileInput}
    cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);
