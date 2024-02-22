import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show properties</Link>
    </div>
  );
};
export default Homepage;
