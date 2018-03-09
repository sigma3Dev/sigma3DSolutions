# sigma3DSolutions

Solve different kinds of mathematical problems in industrial measurement.

## Prerequisites

To run the application, you need to have ```npm``` (node package manager) installed. You can use the command ```npm -v``` to see the version you have installed. If the command returns anything other than a number, you first need to install npm by running the command ```npm install npm@latest -g```.

You also need to have the s3DFittingService app by sigma3D running on your local machine. 

## Getting Started

You can start the app by running the command ```npm start``` in the top-level directory.

You will then be redirected to the start screen. From here, you can select the mathematical problem you want to solve. Then you will be redirected to an input screen where you can put in one or more .txt files (depending on the operation).

You can either input the files by dragging and dropping over the dropzone, or by clicking the dropzone and navigating to the target folder.

After putting in your data, click the 'Submit' button in the bottom right corner. If your input is valid, you will be redirected to the results screen. From here, you can copy and paste the results, or you can also go back to the previous screen to correct your input.

## Built with:

- Node.js
- Create React App
- Redux

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
