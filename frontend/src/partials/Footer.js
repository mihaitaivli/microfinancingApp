import React from 'react';

const Footer = () => {
  return(
    <div>
      <footer className="footer text-muted small">
        <div className="container-fluid">
          <div className="text-white">
            <h6>Contact us</h6>
            <div><i className="ion-email"></i><a href="mailto:customer@peakfinancing.co.uk" style={{color:"inherit"}}>&nbsp;customer@peakfinancing.co.uk</a></div>
            <div><i className="ion-ios-telephone"></i>&nbsp;phone</div>
              <ul>
                <li>(+44) 00123456789</li>
                <li>(+44) 00123456789</li>
              </ul>
            <address>
              <h6>Address</h6>
              <div><i className="ion-ios-location"></i>&nbsp;123 Bellevue Avenue</div>
              <div>Manchester, UK</div>
              <div>M12 3AB</div>
            </address>
            <div>
              <h6>We are social</h6>
              <div>
                <span><i className="ion-social-facebook h2"></i>&nbsp;</span>
                <span><i className="ion-social-twitter h2"></i>&nbsp;</span>
                <span><i className="ion-social-googleplus h2"></i>&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;