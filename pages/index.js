import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Profile() {
  //const url = "/api/cities";
  const url = "https://airquality.peterkellner.net/api/city";
  const { data } = useSWR(url, fetcher, {
    suspense: true,
  });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

/*
If comment out call to <Profile /> the console.log on the click event happens correctly.  That is, on the first click.
  If you do not comment out <Profile /> as is shown here, the first time you cick on any of the three rows, the click is not executed until
  the second or third time you click a button.
 */

export default function Example() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {[1, 2, 3].map((counter) => {
        return (
          <button key={counter}
            onClick={() => {
              console.log(`click Me clicked ${counter}`);
            }}
          >
            Click Me {counter}
          </button>
        );
      })}
      <Profile />
    </Suspense>
  );
}
