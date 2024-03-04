import "../styles/test/test.scss";

const Test = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8">
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  {/* <select className="form-select" id="floatingSelectGrid">
                    <option selected></option>
                    <option value="91" style={{width:"auto"}}>91</option>
                  </select> */}
                 <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="91" style={{width: "20%",textAlign:'center'}}/>
                  {/* <label htmlFor="floatingSelectGrid">Country</label> */}
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="" style={{width: "100%",marginLeft:'-310px'}}/>
                  <label  style = {{textAlign:'center',marginLeft:'-310px'}}htmlFor="floatingInputGrid">Email address</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-primary" >Dark</button>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelectGrid">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">Works with selects</label>
                </div>
              </div>
              <input type="text" className="form-control" aria-label="Text input with checkbox"/>
            </div>

            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
              </div>
              <input type="text" className="form-control" aria-label="Text input with radio button"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test;
