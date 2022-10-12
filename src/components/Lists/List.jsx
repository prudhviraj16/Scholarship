import React from 'react'
import styled from 'styled-components'
import './list.css'
const Container = styled.div`
    background-color: #fff;
`

const List = () => {
  return (
    <Container>

   
    <div className="schemes">

    <div className="row">
        <div className="container">
            <div className="col-md-6 no-padding">
                <div className="col-md-3 col-xs-6 no-padding ">
                    <div className="item">
                        <a href="#"><i className="fa">
                            <img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/scholar_icon.png"/>
                        </i>Scholarships <br/> Offered</a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding">
                    <div className="item">
                        <a href="#"><i className="fa"><img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/whoareeligible.png"/>
                        </i>Who are <br/> Eligible?</a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding">
                    <div className="item">
                        <a href="#"><i className="fa"><img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/courseeligibile.png"/>
                        </i> Courses<br/> Eligible?</a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding">
                    <div className="item">
                        <a href="#"><i className="fa"> <img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/colleges.png"/>
                        </i>Colleges <br/> Eligible </a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 no-padding">
                <div className="col-md-3 col-xs-6 no-padding ">
                    <div className="item">
                        <a
                            href="#"><i
                            className="fa"> <img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/feestructure.png"/>
                        </i>Fee <br/> Structure </a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding">
                    <div className="item">
                        <a href="#"><i className="fa"><img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/time_lines.png"/>
                        </i>Time <br/> Line</a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding">
                    <div className="item">
                        <a href="#"><i className="fa"><img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/reasonsforrejection.png"/>
                        </i> Reasons for Rejection </a>
                    </div>
                </div>
                <div className="col-md-3 col-xs-6 no-padding sakjhdjksa">
                    <div className="item" style={{height : "100%"}}>
                        <a
                            href="#"><i
                            className="fa"><img
                                src="https://telanganaepass.cgg.gov.in:443/WebsiteMain/images/icons/faqs.png"/> </i>FAQs
                            / Instructions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</Container>
  )
}

export default List
