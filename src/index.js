import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AWS from 'aws-sdk'




const credentials = new AWS.Credentials({
  accessKeyId: 'AKIA4APAIKIKCWEFIHHT',
  secretAccessKey: '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'
});

// const options = {
//   credentials: credentials,
//   region: "us-east-2"
// };


AWS.config.update({
  region: "us-east-2",
  credentials: credentials,
  maxRetries: 2,
  httpOptions: {
    timeout: 2 * 1000,
    connectTimeout: 3 * 1000,
  },
})

// const docClient = new AWS.DynamoDB.DocumentClient(options)
// const docClient = new AWS.DynamoDB()

// console.log(AWS.config)

// const dd = new AWS.DynamoDB()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
