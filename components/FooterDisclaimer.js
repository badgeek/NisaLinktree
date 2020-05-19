import DonateButton from "./DonateButton";

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="mb-3">
      {/* Consider the source and clone from the <span className="text-green-400">"new-leaf"</span> branch to create your own. <br className="hidden sm:block"/> */}
      If you find this useful, feel free to buy me a coffee <i className="fa fa-coffee"></i></p>
      <DonateButton/>
    </div>
  );
}

export default FooterDisclaimer;
