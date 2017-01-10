import React from 'react';
var Contact;

export default Contact = () => (
  <div className="container"><br/><br/><br/><br/>
  <div className="row">
    <form role="form" action="" method="post" >
      <div className="col-lg-6">
        <div className="well well-sm"><strong><i className="glyphicon glyphicon-ok form-control-feedback"></i> Required Field</strong></div>
        <div className="form-group">
          <label for="InputName">Your Name</label>
          <div className="input-group">
            <input type="text" className="form-control" name="InputName" id="InputName" placeholder="Enter Name" required/>
            <span className="input-group-addon"><i className="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
        </div>
        <div className="form-group">
          <label for="InputEmail">Your Email</label>
          <div className="input-group">
            <input type="email" className="form-control" id="InputEmail" name="InputEmail" placeholder="Enter Email" required  />
            <span className="input-group-addon"><i className="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
        </div>
        <div className="form-group">
          <label for="InputMessage">Message</label>
          <div className="input-group"
  >
            <textarea name="InputMessage" id="InputMessage" className="form-control" rows="5" required></textarea>
            <span className="input-group-addon"><i className="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
        </div>

        <input type="submit" name="submit" id="submit" value="Submit" className="btn btn-info pull-right"/>
      </div>
    </form>
    <hr className="featurette-divider hidden-lg"/>
    <div className="col-lg-5 col-md-push-1">
      <address>
      <h3>Office Location</h3>
      <p className="lead"><a href="https://www.google.com/maps/preview?ie=UTF-8&q=The+Pentagon&fb=1&gl=us&hq=1400+Defense+Pentagon+Washington,+DC+20301-1400&cid=12647181945379443503&ei=qmYfU4H8LoL2oATa0IHIBg&ved=0CKwBEPwSMAo&safe=on">The Pentagon<br/>
  Washington, DC 20301</a><br/>
        Phone: XXX-XXX-XXXX<br/>
        Fax: XXX-XXX-YYYY</p>
      </address>
    </div>
  </div>

  </div>
);