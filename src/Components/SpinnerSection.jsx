import { Spinner } from "react-bootstrap";
export const SpinnerSection = () => {
  return (
    <>
      <section className="home-article spinner_center">
        <h3 className="text-center text-3xl font-bold">Please Wait...</h3>
        <Spinner className="spinner_div" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </section>
    </>
  );
};
