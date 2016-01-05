
module.exports = function (req, callBack) {
var monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var q = req.slice(1).replace(/\%20/g," ");
var time = {};
var d;
  if (!isNaN(q)) {
    d = new Date(q*1000);
    time = JSON.stringify({unix:q,natural:monthMap[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear()});
  } else {
      d = new Date(q);
      var year = d.getUTCFullYear();
      var month = d.getUTCMonth();
      var day = d.getUTCDate();
      var uT = Date.UTC(year,month,day)/1000;
      if ( !isNaN( d.getDate() ) ) {
        time = JSON.stringify({unix: uT , natural: monthMap[month] + " " + day + ", " + year});
      }  else {
        time = {"unix": null, "natural": null };
      }
  }

 return callBack(null, time);

};
