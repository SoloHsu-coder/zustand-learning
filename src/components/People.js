import React from "react";
import { usePeopleStore } from "../store";
import Input from "./Input";
export default function People() {
  const people = usePeopleStore((state) => state.people);
  return (
    <div>
      <p>We have 2 people in our DB</p>
      <ol>
        {people.map((person) => (
          <li>{person}</li>
        ))}
      </ol>
      <Input />
    </div>
  );
}
