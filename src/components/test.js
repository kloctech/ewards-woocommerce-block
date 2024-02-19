import "../styles/test/test.scss";

const Test = () => {
  return (
   <>
    <div class="container text-center">
    <div class="row">
        <div class="col-sm-8">
        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid">
                    <option selected></option>
                    <option value="91">91</option>
                </select>
                <label for="floatingSelectGrid">Country</label>
                </div>
            </div>
            <div class="col-md">
                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value=""/>
                <label for="floatingInputGrid">Email address</label>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-4">
        <button type="button" class="btn btn-primary" >Dark</button>
        <div class="input-group mb-3">
            <div class="input-group-text">
                {/* <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/> */}
                <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid">Works with selects</label>
                </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox"/>
            </div>

            <div class="input-group">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button"/>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
    </div>
    </div>
   </>
  )
}

export default Test
