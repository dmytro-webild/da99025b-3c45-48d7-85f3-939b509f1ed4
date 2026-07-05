import FeaturesImageBento from "@/components/sections/features/FeaturesImageBento";

export default function GallerySection() {
  return (
    <div data-webild-section="gallery" id="gallery">
      <FeaturesImageBento
        tag="Gallery"
        title="Moments & Milestones"
        description="A visual journey through political campaigns, business leadership at EMS-Chemie, and dedication to Switzerland."
        textAnimation="fade-blur"
        items={[{"title":"National Council","description":"Speaking at the parliament in Bern.","imageSrc":"https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1783294133901-ed0spiuu.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1783293850228-qjl4jcjg.jpg","description":"Leading innovation in the chemical industry.","title":"EMS-CHEMIE"},{"description":"Deeply connected to the Swiss mountains.","imageSrc":"https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=80","title":"Graubünden"},{"description":"Engaging with citizens and business leaders.","imageSrc":"https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1783293850226-qrjkeflj.jpg","title":"Networking"},{"description":"Campaigning for a strong and independent country.","imageSrc":"https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1783294806137-mdbq5tjp.jpg","title":"For Switzerland"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3AniccObAoDJgCkSlT6RJk7a8NL/uploaded-1783293850228-i18vrq66.jpg","description":"Commitment to Swiss manufacturing.","title":"Industry"},{"title":"Leadership","imageSrc":"https://images.unsplash.com/photo-1554774853-719586f82d77?w=1200&q=80","description":"A strong voice for the economy."}]}
      />
    </div>
  );
}