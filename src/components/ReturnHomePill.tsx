import { Link } from "@tanstack/react-router";

export default function ReturnHomePill() {
  return (
    <Link to="/" className="return-home-pill" aria-label="Return to the home page">
      The Studio
    </Link>
  );
}
