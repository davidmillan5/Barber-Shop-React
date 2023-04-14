import { Agenda } from '../Agenda/Agenda';

export const Home = () => {
  return (
    <>
      <section className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 my-2">
              <img
                src="https://images.unsplash.com/photo-1592647420148-bfcc177e2117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80"
                alt=""
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-4 my-2">
              <Agenda></Agenda>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
