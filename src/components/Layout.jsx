import React from "react";
import Header from "./Header";

export default function Layout({ title, children }) {
  return (
    <div className="layout">
      <Header title={title} />
      <main className="main">{children}</main>
    </div>
  );
}