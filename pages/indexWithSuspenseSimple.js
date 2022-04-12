import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Profile() {
  //const url = "/api/cities";
  const url = "https://airquality.peterkellner.net/api/city";
  const { data } = useSWR(url, fetcher, {
    suspense: true
  });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function Example() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
