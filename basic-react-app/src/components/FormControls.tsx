import { MouseEvent } from "react";

function FormControls() {
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onClick={handleClick}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
    </>
  );
}

export default FormControls;
