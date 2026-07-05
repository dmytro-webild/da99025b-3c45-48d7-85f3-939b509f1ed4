import FeaturesImageBento from "@/components/sections/features/FeaturesImageBento";

export default function GallerySection() {
  return (
    <div data-webild-section="gallery" id="gallery">
      <FeaturesImageBento
        tag="Gallery"
        title="Moments & Milestones"
        description="A visual journey through political campaigns, business leadership at EMS-Chemie, and dedication to Switzerland."
        textAnimation="fade-blur"
        items={[
          {
            title: "National Council",
            description: "Speaking at the parliament.",
            imageSrc: "https://picsum.photos/seed/53507368/1200/800"
          },
          {
            title: "EMS-Chemie",
            description: "Leading innovation in the chemical industry.",
            imageSrc: "https://picsum.photos/seed/1204379453/1200/800"
          },
          {
            title: "Graubünden",
            description: "Deeply connected to the Swiss mountains.",
            imageSrc: "https://picsum.photos/seed/8315379/1200/800"
          },
          {
            title: "Networking",
            description: "Engaging with citizens and business leaders.",
            imageSrc: "https://picsum.photos/seed/1183479851/1200/800"
          },
          {
            title: "For Switzerland",
            description: "Campaigning for a strong and independent country.",
            imageSrc: "https://picsum.photos/seed/1594641628/1200/800"
          },
          {
            title: "Industry",
            description: "Commitment to Swiss manufacturing.",
            imageSrc: "https://picsum.photos/seed/117548613/1200/800"
          },
          {
            title: "Leadership",
            description: "A strong voice for the economy.",
            imageSrc: "https://picsum.photos/seed/351614573/1200/800"
          }
        ]}
      />
    </div>
  );
}