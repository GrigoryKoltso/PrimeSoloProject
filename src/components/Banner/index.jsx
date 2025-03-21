import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={`${s.banner} app-container`}>
          <h1 className={s.title}>Amazing Discounts <br/> on Garden Products!</h1>
            <Link to="/sales" className={s.btn}>
              Check out
            </Link>
    </section>
  );
};

export default Banner;

