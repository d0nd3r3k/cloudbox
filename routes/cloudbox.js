
/*
 * GET users listing.
 */

exports.connect = function(req, res){
  var serial = req.params.serial;  
  res.render('cloudbox', { title: 'Cloudbox Serial: ' + serial, 'serial': serial });
};