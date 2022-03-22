import Rating from "./Rating";

const ReviewText = () => {
  return (
    <div>
      <div className="pb-10">
        <h3 className="font-bold text-lg">Best service ever!</h3>
        <Rating rating={5} />
      </div>
      <p>
        I&apos;m baby keffiyeh woke church-key, glossier jianbing schlitz
        fingerstache PBR&B ugh humblebrag hammock dreamcatcher fam. Normcore
        trust fund four dollar toast leggings quinoa af flannel prism viral
        live-edge skateboard before they sold out tattooed. Fixie skateboard
        craft beer, next level distillery +1 kickstarter hexagon vaporware.
        Fingerstache lyft retro bespoke iceland, yr gastropub chartreuse
        polaroid normcore vice cold-pressed taxidermy coloring book. Stumptown
        tofu humblebrag shaman activated charcoal. 3 wolf moon tacos bitters
        roof party viral PBR&B sriracha disrupt cornhole echo park biodiesel.
      </p>
    </div>
  );
};

export default ReviewText;
