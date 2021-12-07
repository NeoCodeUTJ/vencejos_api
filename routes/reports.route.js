module.exports = app => {
    const router = require('express').Router();
    const Reports = require('../controllers/reports.controller');
    // este middleware es para que no se haga la peticion si no tiene token
    const { Auth } = require('../middlewares/auth');


    router.get('/OnTheWay', Reports.getReportOntheway);
    router.get('/Delivered', Reports.getReportDelivered);
    router.get('/InProgress', Reports.getReportInProgress);
    router.get('/allReports', Reports.getReports);
   

    app.use('/api/reports', router);
}
