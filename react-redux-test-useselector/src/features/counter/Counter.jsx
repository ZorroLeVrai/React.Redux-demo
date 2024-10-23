import DisplayFirstData from "./DisplayFirstData";
import DisplaySecondData from "./DisplaySecondData";
import Controllers from "./Controllers";

export default function Counter() {
  return (
    <>
      <div>
        <DisplayFirstData />
      </div>
      <div>
        <DisplaySecondData />
      </div>
      <div>
        <Controllers />
      </div>
    </>
  );
}
