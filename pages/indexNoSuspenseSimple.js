import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Profile() {
  const { data } = useSWR("/api/cities", fetcher, {
    suspense: false
  });

  if (!data) return <div>Loading... (no suspense)</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function Example() {
  return (
    <div>
      <Profile />
    </div>
  );
}
