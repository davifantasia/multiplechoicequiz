# Multiple Choice Quiz

A multiple choice quiz web application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2. The back end is powered by [Firebase](https://console.firebase.google.com/) using [AngularFire](https://github.com/angular/angularfire2) release 5.0.0-rc.11.

## Getting Started

These instructions will get you a copy of the project and get you up and running on your local machine for development purposes.

### Prerequisite

[Angular CLI](https://github.com/angular/angular-cli)

To install, run this:

```
npm install -g @angular/cli
```

### Setup

Clone the repo into your preferred directory, install dependencies and start the project on the development server.

```
git clone https://github.com/davifantasia/multiplechoicequiz.git
cd multiplechoicequiz
npm install
ng serve --open
```

### Data

The database is powered by Firestore (https://firebase.google.com/docs/firestore/).

#### Data Structure

    .
    └── tests
        ├── id
        │   ├── id
        │   ├── name
        │   ├── questions
        │   │   ├── id
        │   │   │   ├── id
        │   │   │   ├── question
        │   │   │   ├── options
        │   │   │   ├── answer
        │   │   │   │   └── answer
        │   │   │   └── ...
        │   │   └── ...
        │   └── ...
        └── ...

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
