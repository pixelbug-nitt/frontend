[![Netlify Status](https://api.netlify.com/api/v1/badges/a29125ef-51ad-4bb2-92b3-e9450ba97420/deploy-status)](https://app.netlify.com/sites/vigilant-wiles-bb4f69/deploys)

The frontend for the website of Pixelbug, NIT Trichy's Photography Club. 
The backend is a serverless compute engine AWS Lambda which handles the image resize and compression based on the api parameters. 
THe CDN service is an AWs lambda compute unit that takes in RAW images in a S3 bucket, and will churn out compressed and resized images as per the need, with the help of values from end points. The resizing and compression is taken care by a Lambda function, which gets triggered by API Gateway. If the requested size of the image is already available, that version is sent. If not, it is generated and sent, thus ensuring unnecessary conversions are not being made, and cached data is used when available.

Website is live at http://pixelbugnitt.com/

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all required Node modules.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


