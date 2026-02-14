import Abc from "./Abc";
import { resources } from "../Data/Resources";

export default function ResourcesList() {
  return (
    <div className="space-y-6">
      {resources.map((res, index) => (
        <Abc key={index} {...res} />
      ))}
    </div>
  );
}
