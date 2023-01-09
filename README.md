# Rec to NWB YAML Creator

The purpose of this application is to provide a guided means to generate the YML file needed for [Rec to NWB](https://github.com/LorenFrankLab/rec_to_nwb). A key purpose is to enable consistently like providing a options for institutions.

All users have to do is fill out  the required fields and then press the generate button at the bottom. The process is straightforward. Alternately, users can upload a yml file to serve as a template.

There are placeholders in text boxes describing what input is expected; after opening the application. And the title-name by the text boxes are self-explanatory.

## Installation

### **The [Releases](https://github.com/LorenFrankLab/rec_to_nwb_yaml_creator/releases) section has all available releases. Download the version desired.**

For Ubuntu, you can download and install the app.image file available in the [Releases](https://github.com/LorenFrankLab/rec_to_nwb_yaml_creator/releases) section. Here is an explanation of app.image file - [https://codeburst.io/how-to-install-and-run-appimage-on-linux-systems-f031ec6a85ce](https://codeburst.io/how-to-install-and-run-appimage-on-linux-systems-f031ec6a85ce)

There is currently no support for Mac and Microsoft Windows. But they can be provided if there is demand.

## Software Development

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/LorenFrankLab/rec_to_nwb_yaml_creator.git
cd rec_to_nwb_yaml_creator
npm install
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Developer Documentation

The doc folder - [https://github.com/LorenFrankLab/rec_to_nwb_yaml_creator/tree/main/docs](https://github.com/LorenFrankLab/rec_to_nwb_yaml_creator/tree/main/docs) has information on the code structure and tips & tricks.

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

This code was built off a template provided by - https://electron-react-boilerplate.js.org/

## Maintainers

- [Frank Lab](https://franklab.ucsf.edu/) at [The University of California at San Francisco](https://www.ucsf.edu/)

## License

MIT © [Frank Lab](https://github.com/LorenFrankLab)
