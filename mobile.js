const MAX_BATTERY = 100;
let Mobile = function (name,color) {
    this.name=name;
    this.color=color;
    this.battery = MAX_BATTERY;
    this.inBox = [];
    this.outBox = [];
    this.message = '';
    this.writeMessage = function (message) {
        this.message = message;
    };
    this.sendMessage = function (phone) {
        phone.inBox.push(this.message);
        this.outBox.push(this.message);
        this.battery--;
    };
    this.getInbox = function () {
        return this.inBox;
    };
    this.getOutbox = function () {
        return this.outBox;
    };
    this.deleteInbox = function () {
        this.inBox = [];
    };
};
let samsung = new Mobile("samsung" , "xanh");
let iphone = new Mobile("iphone" , "hong");
samsung.writeMessage("xin chao iphone");
samsung.sendMessage(iphone);
console.log(iphone.getInbox());