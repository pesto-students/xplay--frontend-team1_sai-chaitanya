import React from "react";
import img1 from "../../assets/images/first.png";
import img2 from "../../assets/images/second.png";
import img3 from "../../assets/images/third.png";
import img4 from "../../assets/images/fourth.png";
import img5 from "../../assets/images/fifth.png";
import { SearchBar } from "../../components";

const searchBar = [
  {
    alt: "My India",
    source: img1,
  },
  {
    alt: "My India",
    source: img2,
  },
  {
    alt: "My India",
    source: img3,
  },
  {
    alt: "My India",
    source: img4,
  },
  {
    alt: "My India",
    source: img5,
  },
  {
    alt: "My India",
    source: img1,
  },
  {
    alt: "My India",
    source: img2,
  },
  {
    alt: "My India",
    source: img3,
  },
  {
    alt: "My India",
    source: img4,
  },
  {
    alt: "My India",
    source: img5,
  },
  {
    alt: "My India",
    source: img1,
  },
  {
    alt: "My India",
    source: img2,
  },
  {
    alt: "My India",
    source: img3,
  },
  {
    alt: "My India",
    source: img4,
  },
  {
    alt: "My India",
    source: img5,
  },
  {
    alt: "My India",
    source: img1,
  },
  {
    alt: "My India",
    source: img2,
  },
  {
    alt: "My India",
    source: img3,
  },
  {
    alt: "My India",
    source: img4,
  },
  {
    alt: "My India",
    source: img5,
  },
];
function searchMovie() {
  return <SearchBar title="Results" searchBar={searchBar} />;
}

export default searchMovie;
