import { Spinner } from "react-bootstrap";
export const SpinnerForLogin = () => {
  return (
    <>
      <section className="home-article spinner_center login_spiner">
        <div>
          <h2 className="text-center text-3xl font-bold">API is Fetching...</h2>
          <Spinner className="spinner_div" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </section>
    </>
  );
};
