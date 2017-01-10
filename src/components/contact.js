import React from 'react';
var Contact;

export default Contact = () => (
  <div className="container contactPage">
      <br/><br/><br/><br/>
      <div className="row">

          <div className='col-md-3'>
              <h1>Contact Us</h1>

              <label>Amy Sun</label>
              <p><img role="presentation" className='profileEmail profileIcon'/>  bjn428@gmail.com</p>
              <p><img role="presentation" className='profilePhone profileIcon'/>  (417) 763-0542</p>

              <label>Jianing Bo</label>
              <p><img role="presentation" className='profileEmail profileIcon'/>  bjn428@gmail.com</p>
              <p><img role="presentation" className='profilePhone profileIcon'/>  (417) 763-0542</p>

          </div>

          <div className="col-lg-8 col-lg-offset-1">

              <h1>Leave Us A Message</h1>

              <form id="contact-form" method="post" action="contact.php" role="form">

                  <div className="messages"></div>

                  <div className="controls">

                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_name">Firstname *</label>
                                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_lastname">Lastname *</label>
                                  <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_email">Email *</label>
                                  <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label for="form_phone">Phone</label>
                                  <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"/>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                              <div className="form-group">
                                  <label for="form_message">Message *</label>
                                  <textarea id="form_message" name="message" className="form-control" placeholder="Leave a message ..." rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <input type="submit" className="btn btn-success btn-send" value="Send message"/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                              <p className="text-muted"><strong>*</strong> These fields are required.</p>
                          </div>
                      </div>
                  </div>

              </form>

          </div>

      </div>

  </div>
);