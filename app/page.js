import Image from "next/image";
import LandingHeader from "./components/Landing/LandingHeader";
import EventList from "./components/Landing/EventList";

export default function Home() {
  return (
    <section>
      <LandingHeader></LandingHeader>
      <section className="py-4">
        <EventList></EventList>
      </section>
    </section>
  );
}
