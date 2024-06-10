
import { data } from "./collect_data";
import { collect_full_data } from "./collect_data";

document
  .querySelector("input")
  .addEventListener("keydown", collect_full_data);

