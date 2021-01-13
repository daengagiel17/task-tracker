## Pre Install

- Install [Backend Task Tracker](https://github.com/daengagiel17/task-tracker-backend) in your local computer
- Have an emulator from android studio
- Install npm
- Be sure you have run this command so emulator can connect to localhost:5000
```sh
$ adb reverse tcp:5000 tcp:5000
```

## Install
- Clone this repository
```sh
$ git clone https://github.com/daengagiel17/task-tracker.git
```
or
```sh
$ git clone git@github.com:daengagiel17/task-tracker.git
```
or you can download it and extract the zip file.
- Move to directory task-tracker
```sh
$ cd task-tracker
```
- Run this command to install npm modul
```sh
$ npm install
```
- And run the application
```sh
$ npm run android
```

## Bug
- Does not save old tracker if user press play button directly from task list while another tracker is running

## Plan 
- Autentication and Profile
- Adding a description to each tracker isn't just a job description

## Component 
- Redux to manage state
- Redux saga to allow Redux connect an api
- Stopwatch React Native for tracker time
- Navigation, preparation for further development which allows navigate many screens