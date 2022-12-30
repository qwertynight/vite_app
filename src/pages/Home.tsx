import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 className="text-center" style={{ fontSize: 56 }}>
        MacBook Air
      </h1>
      <h3 className="text-center">Don’t take it lightly.</h3>
      <p className="text-center">From $1199</p>
      <p className="text-center ">
        <NavLink to={"/store"}>
          <button
            style={{
              background: " #0071e3",
              color: "#fff",
              borderRadius: 98,
              border: "none",
            }}
          >
            Buy Now
          </button>
        </NavLink>
        <NavLink className="ms-4" to={"/store"}>
          Learn more
        </NavLink>
      </p>
      <p className="text-center">
        <img
          width={483}
          height={369}
          src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large_2x.jpg"
          alt=""
        />
      </p>
    </>
  );
}
