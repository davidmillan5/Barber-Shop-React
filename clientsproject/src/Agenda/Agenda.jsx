export const Agenda = () => {
  return (
    <>
      <form action="#">
        <div className="row">
          <div className="col-12">
            <div class="input-group mb-3">
              <span
                class="input-group-text bg-dark text-light"
                id="basic-addon1"
              >
                Name:
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="col-12">
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-dark text-light"
                  id="basic-addon1"
                >
                  E-mail:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-12">
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-dark text-light"
                  id="basic-addon1"
                >
                  Phone:
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="col-12">
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-dark text-light"
                  id="basic-addon1"
                >
                  Day:
                </span>
                <input
                  type="date"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-12">
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-dark text-light"
                  id="basic-addon1"
                >
                  Time:
                </span>
                <input
                  type="time"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
