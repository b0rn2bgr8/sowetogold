
//import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-social/bootstrap-social.css';
import React from 'react';
import { Container,Row,Col,Media } from 'reactstrap';
import { Link } from 'react-router-dom';


 class Contact extends React.Component {
  render() {
    return (
      <div>
        <Container class="contact"style={{backgroundColor:"white",width:"70%",margin:"auto",boxShadow:"10px "}}>
            <h2>Contact Us</h2>
            
          
        <div class="row mt-5">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
         
            <div class="card-block" >
							<h3 class="card-title"><img  class="card-block block-1" width="40px" src="data:image/png;base64,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" alt="Card image cap" />Address</h3>
							<p class="card-text">9 Wright St, Industria West <br/>Soweto 2093</p>
              
							
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
          
						<div class="card-block">
							<h3 class="card-title"><img class="card-block block-1" width="40px" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cD78JENPfw26uY2Nvbx9qhgabaIEHFB9ZqjNhecZtgaHe5wUhA" alt="Soweto observer email address" />Email</h3>
							<p class="card-text">info@sowetoobserver.co.za<br/>robert@sowetoobserver.co.za</p>
							
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
          
						<div class="card-block">
							<h3 class="card-title"><img  class="card-block block-1" width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4I5dEXbQoZYPib4-iq4bd1rcS-d7slsnm15vKOo0paATUCdMdg" alt="Soweto observer email address" />Phone Number</h3>
							<p class="card-text">Tel: +27 11 280 3000 <br/> Fax: +27 11 280 5505</p>
							
						</div>
					</div>
				</div>
			</div>
          
        {/* <img width="40px" src="data:image/png;base64,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" alt="Card image cap" />
          
          <br/>
          <p>9 Wright St, Industria West</p>
           <p>Soweto</p>
				   <p>2093</p>
        

        
        
         <br/>
          <img width="40px" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cD78JENPfw26uY2Nvbx9qhgabaIEHFB9ZqjNhecZtgaHe5wUhA" alt="Soweto observer email address" />
         
          <br/>
          <p>info@sowetoobserver.co.za</p>
          <p>Email: robert@sowetoobserver.co.za</p>
        

           
           <img width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4I5dEXbQoZYPib4-iq4bd1rcS-d7slsnm15vKOo0paATUCdMdg" alt="Soweto observer email address" />
          <br/>
          <p>Tel: +27 11 280 3000</p>
          <p>Fax: +27 11 280 5505</p>
				  <p>Mobile: +27 63 451 5871</p>
          
        <br/> */}

       <br/>
        
        <Row>
           <Col md={{ size: 6, order: 2, offset: 1 }}>
           <div class="social-icons">
                                
                                	<ul class="nomargin">
                                    
                <a href="https://www.facebook.com/Soweto-Observer-337066023393491/"><i class="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                &nbsp;&nbsp;
	            <a href="https://twitter.com"><i class="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
              &nbsp;&nbsp;
	            <a href="https://plus.google.com"><i class="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
              &nbsp;&nbsp;
	            <a href="mailto:robert@sowetoobserver.co.za"><i class="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                                    
                                    </ul>
                                </div>

           {/* <h4>follow Us On Social Media</h4> 
           <br/>
             <a><i href="https://www.facebook.com/Soweto-Observer" class="fa fa-facebook" arial-hidden="true"></i></a>
            
             <a><i class="fa fa-twitter" arial-hidden="true"></i></a>
            
             <a><i class="fa fa-instagram" arial-hidden="true"></i></a>
           <br/> */}
           <br/>
           <h4>Our Direction</h4> 
           <br/>
           
           <iframe width="400" height="400" src="https://maps.google.com/maps?q=soweto urban &t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
           <br/>
           
           
                         
            
          </Col>
        </Row>
        
      </Container> 
        
      </div>
    );
  }
}
export default Contact;          

