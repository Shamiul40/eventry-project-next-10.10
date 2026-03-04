import DetailsComponents from "@/app/components/DetailsPage/Details";
import DetailsVenue from "@/app/components/DetailsPage/DetailsVenue";
import HeroDetails from "@/app/components/DetailsPage/HeroDetails";

export default function DetailsPage() {
  return (
    <main>
      <HeroDetails></HeroDetails>
        <section className="grid grid-cols-5 ">
            <DetailsComponents></DetailsComponents>
            <DetailsVenue></DetailsVenue>
        </section>
    </main>
  )
}
