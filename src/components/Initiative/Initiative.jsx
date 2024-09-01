import React from 'react'
import "./Initiate.css"
import applicants from "../../assets/applicants.svg"
import lender from "../../assets/lenders and financial.svg"
import document from "../../assets/document.svg"
import nodal from "../../assets/nodal agencies.svg"
import facilator from "../../assets/facilators.svg"
import image from "../../assets/image.png"

const Initiative = () => {
    return (
        <div className="content">
            <div className='In_body'>
                <div className="In_content ">
                    <h3>About the Initiative</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur nisi libero provident labore aut, consectetur aspernatur dolorum qui eveniet quia!
                    </p>
                </div>
                <div className="In_table">
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nemo!</p><hr />
                    <p className='paragraph'><img className='svg' src={applicants} alt="" /> <h3 className='h3' >Applicants ( Benificiary)</h3></p><hr />
                    <p className='paragraph'><img className='svg' src={lender} alt="" /><h3 className='h3' >Lenders and financial Institutions</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={document} alt="" /> <h3 className='h3' >Central / State Government Ministries</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={nodal} alt="" /> <h3 className='h3' >Nodal Agencies</h3> </p><hr />
                    <p className='paragraph'><img className='svg' src={facilator} alt="" /> <h3 className='h3' >Facilitators</h3>  </p><hr />

                </div>
            </div>
            <div className="d_body">
                <div className="d_image">
                    <img className='d_img' src={image} alt="" />
                </div>
                <div className="d_discription">
                    <div className="d-heading">
                        <h1>Digital Integeration</h1>
                    </div>
                    <div className="d_para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde explicabo laborum blanditiis ea necessitatibus ipsa provident dicta accusamus labore quam! Aut magni officia expedita totam, non sit sint quibusdam provident possimus esse minima eligendi, perspiciatis pariatur laboriosam excepturi consequuntur nisi consectetur quis quam cupiditate quo voluptate? Delectus repudiandae consequatur corporis ex ad cumque mollitia quia ipsum, nam iure, nulla libero aspernatur explicabo. Tenetur quibusdam eaque harum aperiam, fugiat commodi voluptatem consequatur in enim, inventore quae quia. Consequatur maiores incidunt voluptatum, earum ab quaerat sed sunt ratione beatae, a fuga tenetur exercitationem repudiandae quo laboriosam atque error nihil eum inventore sint.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Initiative
