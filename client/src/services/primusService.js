// import { inject } from 'aurelia-framework';
// import Primus from 'Primus';

export class primusService {
  constructor() {
    this.loggedInUser = null;
    this.configuration = {
      optionOne: false,
      optionTwo: false
    };

    // this.primus = new Primus('http://localhost:8081');
    //    this.primus.on('data', function received(data) {
    //      console.log('received ' + data);
    //    });
  }

  connect(server) {
    this.primus = new Primus(server);
  }
}
//  async connect(url) {
//    this.primus = await Primus.connect(url);
//    this.primus.on('connection', function(spark) {
//      this.spark = spark; // Save off the spark for later use
//    });
//  }
