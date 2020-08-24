import React from "react";

const Wrapper = ({ children }) => (
  <div>
    <div>header</div>
    <div>{children}</div>
    <div>footer</div>
  </div>
);
