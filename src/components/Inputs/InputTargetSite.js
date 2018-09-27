import React, { Component } from 'react'
import Input from '../Input'


class InputTargetSite extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
       <div>
         { /*
          :false,
        cio_au:false,
        cio_nz:false,
        cmo_au:false,
        cw_au:false,
        cw_nz:false,
        cso_au:false,
        reseller_nz:false
          site list-
          ARN | arn_au | 11
          CIO AU | cio_au |7
          CIO NZ | cio_nz |27
          CMO | cmo_au | 23
          CWAU | cw_au | 5
          CWNZ | cw_nz | 26
          CSO | cso_au | 10
          RESELLER | reseller_nz| 28
          
          TW | tw  | 6
          GGG | ggg | 3

         TODO: add pcw nzpcw tw ggg for piblish site
         */}
          <div className="col-3 padd alignRight">
              <label htmlFor="slug">
                Publush to<span className="colorWarning">*</span>
              </label>
            </div>
          <div className="col-9 padd">
              <div className="col-6 ">
                <div>
                  <Input 
                  type="checkbox" 
                  name="arn_au"
                  id="arn_au" 
                  value='11'
                  onChange={ this.props.onChange }
                 // onChange={(event) => this.handleChecked( event,'arn_au')} 
                  checked={ this.props.publishTo.arn_au } />
                  <label htmlFor="arn_au">
                    <span><span></span></span>ARN
                  </label>
                </div>
                <div >
                  <Input 
                  type="checkbox" 
                  name="cio_au"
                  id="cio_au"
                  value="7"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cio_au }
                  />
                  <label htmlFor="cio_au">
                    <span><span></span></span>CIO AU
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="cio_nz"
                  id="cio_nz"
                  value="27"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cio_nz }/>
                  <label htmlFor="cio_nz">
                    <span><span></span></span>CIO NZ
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="cmo_au"
                  id="cmo_au"
                  value="23"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cmo_au } />
                  <label htmlFor="cmo_au">
                    <span><span></span></span>CMO
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="ggg"
                  id="ggg"
                  value="3"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.ggg } />
                  <label htmlFor="ggg">
                    <span><span></span></span>GoodGearGuide
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <Input 
                  type="checkbox" 
                  name="cw_au"
                  id="cw_au"
                  value="5"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cw_au } />
                  <label htmlFor="cw_au">
                    <span><span></span></span>Computerworld AU
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="cw_nz"
                  id="cw_nz"
                  value="26"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cw_nz } />
                  <label htmlFor="cw_nz">
                    <span><span></span></span>Computerworld NZ
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="cso_au"
                  id="cso_au"
                  value="10"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.cso_au } />
                  <label htmlFor="cso_au">
                    <span><span></span></span>CSO
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="reseller_nz"
                  id="reseller_nz"
                  value="28"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.reseller_nz } />
                  <label htmlFor="reseller_nz">
                    <span><span></span></span>Reseller
                  </label>
                </div>
                <div>
                  <Input 
                  type="checkbox" 
                  name="tw"
                  id="tw"
                  value="6"
                  onChange={ this.props.onChange }
                  checked={ this.props.publishTo.tw } />
                  <label htmlFor="tw">
                    <span><span></span></span>Techworld
                  </label>
                </div>
              </div>
             { /*this.props.sites.length === 0 || !this.props.sites ? <div className="colorWarning">Please select at least one target site</div> : null */}
           
              
            </div>
        </div>
      )
  }
}



export default InputTargetSite